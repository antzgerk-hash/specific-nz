/**
 * Admin Media & Document Management
 * - Upload project photos to category galleries
 * - Upload documents (capability statements, ISO certs, logos, brand assets)
 * - Drag-and-drop interface, admin-only access
 */
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { useCallback, useRef, useState } from "react";
import { Link } from "wouter";

const PROJECT_CATEGORIES = [
  { value: "ffe", label: "FF&E Installations" },
  { value: "joinery", label: "Joinery & Fitout" },
  { value: "relocations", label: "Relocations" },
  { value: "special", label: "Special Projects" },
  { value: "av", label: "AV & OS&E" },
  { value: "warehousing", label: "Warehousing & Storage" },
];

const DOCUMENT_TAGS = ["Logos", "Cap Statements", "Brand", "Branch", "Compliance", "Other"];

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      resolve(result.split(",")[1]); // strip data:...;base64, prefix
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function formatBytes(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

// ─── Drop Zone Component ────────────────────────────────────────────────────
function DropZone({
  onFiles,
  accept,
  label,
}: {
  onFiles: (files: File[]) => void;
  accept: string;
  label: string;
}) {
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragging(false);
      const files = Array.from(e.dataTransfer.files);
      if (files.length) onFiles(files);
    },
    [onFiles],
  );

  return (
    <div
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
      style={{
        border: `2px dashed ${dragging ? "oklch(0.63 0.18 38)" : "oklch(0.30 0.03 240)"}`,
        background: dragging ? "oklch(0.18 0.04 38 / 0.15)" : "oklch(0.14 0.032 240)",
        borderRadius: "4px",
        padding: "2.5rem 1.5rem",
        textAlign: "center",
        cursor: "pointer",
        transition: "all 0.2s ease",
      }}
    >
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple
        style={{ display: "none" }}
        onChange={(e) => {
          const files = Array.from(e.target.files ?? []);
          if (files.length) onFiles(files);
          e.target.value = "";
        }}
      />
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "oklch(0.65 0.025 240)" }}>
        {label}
      </p>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "oklch(0.45 0.02 240)", marginTop: "0.4rem" }}>
        Drag & drop or click to browse
      </p>
    </div>
  );
}

// ─── Project Photos Tab ─────────────────────────────────────────────────────
function ProjectPhotosTab() {
  const [category, setCategory] = useState("ffe");
  const [projectName, setProjectName] = useState("");
  const [caption, setCaption] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  const utils = trpc.useUtils();
  const uploadMutation = trpc.projectMedia.upload.useMutation({
    onSuccess: () => {
      utils.projectMedia.listAll.invalidate();
      utils.projectMedia.listByCategory.invalidate({ category });
    },
  });
  const deleteMutation = trpc.projectMedia.delete.useMutation({
    onSuccess: () => {
      utils.projectMedia.listAll.invalidate();
    },
  });

  const { data: allMedia, isLoading } = trpc.projectMedia.listAll.useQuery();

  const handleFiles = async (files: File[]) => {
    setUploading(true);
    setUploadStatus(null);
    let successCount = 0;
    let errorCount = 0;

    for (const file of files) {
      try {
        const fileBase64 = await fileToBase64(file);
        await uploadMutation.mutateAsync({
          category,
          projectName: projectName || undefined,
          caption: caption || undefined,
          fileName: file.name,
          mimeType: file.type,
          fileBase64,
          fileSize: file.size,
        });
        successCount++;
      } catch {
        errorCount++;
      }
    }

    setUploading(false);
    setUploadStatus(
      errorCount === 0
        ? `${successCount} photo${successCount !== 1 ? "s" : ""} uploaded successfully.`
        : `${successCount} uploaded, ${errorCount} failed.`,
    );
  };

  const mediaByCategory = PROJECT_CATEGORIES.map((cat) => ({
    ...cat,
    items: (allMedia ?? []).filter((m) => m.category === cat.value),
  }));

  return (
    <div>
      {/* Upload form */}
      <div
        style={{
          background: "oklch(0.13 0.032 240)",
          border: "1px solid oklch(0.22 0.03 240)",
          padding: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "white", marginBottom: "1rem" }}>
          Upload Project Photos
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
          <div>
            <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "oklch(0.60 0.025 240)", display: "block", marginBottom: "0.4rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Category *
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              style={{ width: "100%", background: "oklch(0.18 0.035 240)", border: "1px solid oklch(0.28 0.03 240)", color: "white", padding: "0.6rem 0.75rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem" }}
            >
              {PROJECT_CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "oklch(0.60 0.025 240)", display: "block", marginBottom: "0.4rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Project Name (optional)
            </label>
            <input
              type="text"
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              placeholder="e.g. Hotel Indigo Auckland"
              style={{ width: "100%", background: "oklch(0.18 0.035 240)", border: "1px solid oklch(0.28 0.03 240)", color: "white", padding: "0.6rem 0.75rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem" }}
            />
          </div>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "oklch(0.60 0.025 240)", display: "block", marginBottom: "0.4rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Caption (optional)
          </label>
          <input
            type="text"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Short description of the photo"
            style={{ width: "100%", background: "oklch(0.18 0.035 240)", border: "1px solid oklch(0.28 0.03 240)", color: "white", padding: "0.6rem 0.75rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem" }}
          />
        </div>
        <DropZone
          onFiles={handleFiles}
          accept="image/*"
          label="Drop project photos here (JPG, PNG, WEBP)"
        />
        {uploading && (
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "oklch(0.63 0.18 38)", marginTop: "0.75rem" }}>
            Uploading…
          </p>
        )}
        {uploadStatus && (
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: uploadStatus.includes("failed") ? "#f87171" : "#4ade80", marginTop: "0.75rem" }}>
            {uploadStatus}
          </p>
        )}
      </div>

      {/* Existing media by category */}
      {isLoading ? (
        <p style={{ color: "oklch(0.55 0.025 240)", fontFamily: "'DM Sans', sans-serif" }}>Loading…</p>
      ) : (
        mediaByCategory.map((cat) =>
          cat.items.length > 0 ? (
            <div key={cat.value} style={{ marginBottom: "2rem" }}>
              <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "oklch(0.63 0.18 38)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                {cat.label} ({cat.items.length})
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "0.75rem" }}>
                {cat.items.map((item) => (
                  <div key={item.id} style={{ position: "relative", background: "oklch(0.13 0.032 240)", border: "1px solid oklch(0.22 0.03 240)" }}>
                    <img
                      src={item.url}
                      alt={item.caption ?? item.projectName ?? "Project photo"}
                      style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", display: "block" }}
                    />
                    <div style={{ padding: "0.5rem" }}>
                      {item.projectName && (
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "white", fontWeight: 600, marginBottom: "0.2rem" }}>{item.projectName}</p>
                      )}
                      {item.caption && (
                        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", color: "oklch(0.55 0.025 240)" }}>{item.caption}</p>
                      )}
                      <button
                        onClick={() => { if (confirm("Delete this photo?")) deleteMutation.mutate({ id: item.id }); }}
                        style={{ marginTop: "0.4rem", background: "oklch(0.40 0.15 15)", color: "white", border: "none", padding: "0.25rem 0.6rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", cursor: "pointer", width: "100%" }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null,
        )
      )}
    </div>
  );
}

// ─── Documents Tab ──────────────────────────────────────────────────────────
function DocumentsTab() {
  const [tag, setTag] = useState("Cap Statements");
  const [title, setTitle] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  const utils = trpc.useUtils();
  const uploadMutation = trpc.documents.upload.useMutation({
    onSuccess: () => utils.documents.listAll.invalidate(),
  });
  const deleteMutation = trpc.documents.delete.useMutation({
    onSuccess: () => utils.documents.listAll.invalidate(),
  });
  const toggleMutation = trpc.documents.togglePublic.useMutation({
    onSuccess: () => utils.documents.listAll.invalidate(),
  });

  const { data: allDocs, isLoading } = trpc.documents.listAll.useQuery();

  const handleFiles = async (files: File[]) => {
    if (!title && files.length === 1) setTitle(files[0].name.replace(/\.[^.]+$/, ""));
    setUploading(true);
    setUploadStatus(null);
    let successCount = 0;
    let errorCount = 0;

    for (const file of files) {
      try {
        const fileBase64 = await fileToBase64(file);
        await uploadMutation.mutateAsync({
          title: title || file.name.replace(/\.[^.]+$/, ""),
          tag,
          fileName: file.name,
          mimeType: file.type,
          fileBase64,
          fileSize: file.size,
          isPublic,
        });
        successCount++;
      } catch {
        errorCount++;
      }
    }

    setUploading(false);
    setTitle("");
    setUploadStatus(
      errorCount === 0
        ? `${successCount} document${successCount !== 1 ? "s" : ""} uploaded successfully.`
        : `${successCount} uploaded, ${errorCount} failed.`,
    );
  };

  const docsByTag = DOCUMENT_TAGS.map((t) => ({
    tag: t,
    items: (allDocs ?? []).filter((d) => d.tag === t),
  }));

  return (
    <div>
      {/* Upload form */}
      <div
        style={{
          background: "oklch(0.13 0.032 240)",
          border: "1px solid oklch(0.22 0.03 240)",
          padding: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        <h3 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "white", marginBottom: "1rem" }}>
          Upload Document / Asset
        </h3>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
          <div>
            <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "oklch(0.60 0.025 240)", display: "block", marginBottom: "0.4rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Tag / Category *
            </label>
            <select
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              style={{ width: "100%", background: "oklch(0.18 0.035 240)", border: "1px solid oklch(0.28 0.03 240)", color: "white", padding: "0.6rem 0.75rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem" }}
            >
              {DOCUMENT_TAGS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>
          <div>
            <label style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "oklch(0.60 0.025 240)", display: "block", marginBottom: "0.4rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
              Document Title (optional)
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Auto-filled from filename if blank"
              style={{ width: "100%", background: "oklch(0.18 0.035 240)", border: "1px solid oklch(0.28 0.03 240)", color: "white", padding: "0.6rem 0.75rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem" }}
            />
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
          <input
            type="checkbox"
            id="isPublic"
            checked={isPublic}
            onChange={(e) => setIsPublic(e.target.checked)}
            style={{ width: "16px", height: "16px", accentColor: "oklch(0.63 0.18 38)" }}
          />
          <label htmlFor="isPublic" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "oklch(0.70 0.025 240)", cursor: "pointer" }}>
            Make visible on public website
          </label>
        </div>
        <DropZone
          onFiles={handleFiles}
          accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.png,.jpg,.svg,.zip"
          label="Drop documents here (PDF, Word, Excel, PowerPoint, images)"
        />
        {uploading && (
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: "oklch(0.63 0.18 38)", marginTop: "0.75rem" }}>
            Uploading…
          </p>
        )}
        {uploadStatus && (
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.8rem", color: uploadStatus.includes("failed") ? "#f87171" : "#4ade80", marginTop: "0.75rem" }}>
            {uploadStatus}
          </p>
        )}
      </div>

      {/* Existing documents by tag */}
      {isLoading ? (
        <p style={{ color: "oklch(0.55 0.025 240)", fontFamily: "'DM Sans', sans-serif" }}>Loading…</p>
      ) : (
        docsByTag.map((group) =>
          group.items.length > 0 ? (
            <div key={group.tag} style={{ marginBottom: "2rem" }}>
              <h4 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1rem", color: "oklch(0.60 0.12 185)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                {group.tag} ({group.items.length})
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {group.items.map((doc) => (
                  <div
                    key={doc.id}
                    style={{ display: "flex", alignItems: "center", gap: "1rem", background: "oklch(0.13 0.032 240)", border: "1px solid oklch(0.22 0.03 240)", padding: "0.75rem 1rem" }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem", color: "white", fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{doc.title}</p>
                      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", color: "oklch(0.50 0.02 240)", marginTop: "0.1rem" }}>
                        {doc.mimeType} {doc.fileSize ? `· ${formatBytes(doc.fileSize)}` : ""}
                      </p>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexShrink: 0 }}>
                      <button
                        onClick={() => toggleMutation.mutate({ id: doc.id, isPublic: !doc.isPublic })}
                        style={{
                          background: doc.isPublic ? "oklch(0.35 0.12 145)" : "oklch(0.22 0.03 240)",
                          color: doc.isPublic ? "#4ade80" : "oklch(0.55 0.025 240)",
                          border: "none",
                          padding: "0.3rem 0.75rem",
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.7rem",
                          cursor: "pointer",
                          fontWeight: 600,
                        }}
                      >
                        {doc.isPublic ? "Public" : "Private"}
                      </button>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ background: "oklch(0.22 0.03 240)", color: "oklch(0.63 0.18 38)", border: "none", padding: "0.3rem 0.75rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", textDecoration: "none", display: "inline-block" }}
                      >
                        View
                      </a>
                      <button
                        onClick={() => { if (confirm("Delete this document?")) deleteMutation.mutate({ id: doc.id }); }}
                        style={{ background: "oklch(0.40 0.15 15)", color: "white", border: "none", padding: "0.3rem 0.75rem", fontFamily: "'DM Sans', sans-serif", fontSize: "0.7rem", cursor: "pointer" }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null,
        )
      )}
    </div>
  );
}

// ─── Main Admin Page ────────────────────────────────────────────────────────
export default function AdminMedia() {
  const { user, loading } = useAuth();
  const [activeTab, setActiveTab] = useState<"photos" | "documents">("photos");

  if (loading) {
    return (
      <div style={{ minHeight: "100vh", background: "oklch(0.11 0.03 240)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "oklch(0.55 0.025 240)", fontFamily: "'DM Sans', sans-serif" }}>Loading…</p>
      </div>
    );
  }

  if (!user || user.role !== "admin") {
    return (
      <div style={{ minHeight: "100vh", background: "oklch(0.11 0.03 240)", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "1rem" }}>
        <p style={{ color: "#f87171", fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>Access restricted — admin only.</p>
        <Link href="/" style={{ color: "oklch(0.63 0.18 38)", fontFamily: "'DM Sans', sans-serif", fontSize: "0.875rem" }}>← Back to site</Link>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "oklch(0.11 0.03 240)", overflowX: "hidden" }}>
      {/* Header */}
      <div style={{ background: "oklch(0.13 0.032 240)", borderBottom: "1px solid oklch(0.22 0.03 240)", padding: "1rem 0" }}>
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "oklch(0.63 0.18 38)", marginBottom: "0.2rem" }}>
              Admin Panel
            </p>
            <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.75rem", color: "white", lineHeight: 1 }}>
              Media & Document Manager
            </h1>
          </div>
          <Link href="/" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.75rem", color: "oklch(0.55 0.025 240)", textDecoration: "none", letterSpacing: "0.06em" }}>
            ← Back to site
          </Link>
        </div>
      </div>

      {/* Tab bar */}
      <div style={{ background: "oklch(0.13 0.032 240)", borderBottom: "1px solid oklch(0.22 0.03 240)" }}>
        <div className="container" style={{ display: "flex", gap: 0 }}>
          {(["photos", "documents"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: "none",
                border: "none",
                borderBottom: activeTab === tab ? "2px solid oklch(0.63 0.18 38)" : "2px solid transparent",
                color: activeTab === tab ? "white" : "oklch(0.55 0.025 240)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.8rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "1rem 1.5rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
            >
              {tab === "photos" ? "Project Photos" : "Documents & Assets"}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container" style={{ paddingTop: "2rem", paddingBottom: "4rem" }}>
        {activeTab === "photos" ? <ProjectPhotosTab /> : <DocumentsTab />}
      </div>
    </div>
  );
}
