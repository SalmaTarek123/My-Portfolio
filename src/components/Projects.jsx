// import React, { useEffect, useState } from 'react';
// import './components.css';
// import { projects } from '../assets/data'; // تأكدي إن الملف موجود

// const Projects = () => {
//   const [selected, setSelected] = useState(null);

//   // يقفل المودال بزرار Escape
//   useEffect(() => {
//     const handleKey = (e) => {
//       if (e.key === 'Escape') setSelected(null);
//     };
//     window.addEventListener('keydown', handleKey);
//     return () => window.removeEventListener('keydown', handleKey);
//   }, []);

//   return (
//     <section className="projects-section" id="projects">
//       <div className="container">
//         <div className="section-header">
//           <h2>Selected Projects</h2>
//           <p>Six real datasets, six full notebooks — click a book to open the case study.</p>
//         </div>

//         {/* ===== BOOKSHELF ===== */}
//         <div className="bookshelf">
//           {projects.map((project, index) => (
//             <button
//               key={project.id}
//               className="book"
//               onClick={() => setSelected(project)}
//               aria-label={`Open ${project.title} case study`}
//             >
//               <div className="book-cover" style={{ '--book-color': project.color }}>
//                 <span className="book-spine"></span>
//                 <span className="book-index">0{index + 1}</span>

//                 <div>
//                   <h3 className="book-title">{project.title}</h3>
//                   <p className="book-tagline">{project.shortDesc}</p>
//                 </div>

//                 <span className="book-open-hint">Open case study →</span>
//               </div>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* ===== MODAL (the open book) ===== */}
//       {selected && (
//         <div className="modal-overlay" onClick={() => setSelected(null)}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close">×</button>

//             <div className="modal-body">
//               <span
//                 className="tag"
//                 style={{ color: selected.color, borderColor: selected.color }}
//               >
//                 {selected.tagLabel}
//               </span>

//               <h2>{selected.title}</h2>
//               <p className="modal-description">{selected.description}</p>

//               <h3>Problem</h3>
//               <p className="modal-description">{selected.problem}</p>

//               <h3>Solution</h3>
//               <p className="modal-description">{selected.solution}</p>

//               {selected.results && selected.results.length > 0 && (
//                 <>
//                   <h3>Key Results</h3>
//                   <ul>
//                     {selected.results.map((r, i) => (
//                       <li key={i}>{r}</li>
//                     ))}
//                   </ul>
//                 </>
//               )}

//               <h3>Tech Stack</h3>
//               <div className="modal-tags">
//                 {selected.tags?.map((tag, i) => (
//                   <span key={i} className="tag">{tag}</span>
//                 ))}
//               </div>

//               {selected.images && selected.images.length > 0 ? (
//                 <>
//                   <h3>Key Visuals</h3>
//                   <div className="modal-gallery">
//                     {selected.images.map((img, i) => (
//                       <figure key={i}>
//                         <img src={img.src} alt={img.caption} loading="lazy" />
//                         <figcaption>{img.caption}</figcaption>
//                       </figure>
//                     ))}
//                   </div>
//                 </>
//               ) : (
//                 <p className="modal-note">
//                   No charts here — this project is a standalone desktop app, not a data notebook.
//                 </p>
//               )}

//               {selected.link && (
//                 <a
//                   href={selected.link}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="btn btn-primary"
//                   style={{ marginTop: '1.5rem' }}
//                 >
//                   View on GitHub
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Projects;











import React, { useEffect, useState } from 'react';
import './components.css';
import { projects } from '../assets/data'; // تأكدي إن الملف موجود

// دوران وإزاحة ثابتة لكل كتاب عشان الرف يبان مبعثر شوية مش مرصوص بالمسطرة
const SCATTER = [
  { rot: -3, off: 6 },
  { rot: 2.5, off: -8 },
  { rot: -1.5, off: 10 },
  { rot: 3, off: -4 },
  { rot: -2.5, off: 5 },
  { rot: 1.5, off: -10 },
];

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const [pageIndex, setPageIndex] = useState(0);

  const openBook = (project) => {
    setSelected(project);
    setPageIndex(0);
  };
  const closeBook = () => setSelected(null);

  // يبني صفحات المحتوى بس (من غير غلاف — الغلاف بقى صفحة شمال ثابتة)
  const getPages = (p) => {
    const pages = [];
    pages.push({ type: 'text', title: 'Problem', body: p.problem });
    pages.push({ type: 'text', title: 'Solution', body: p.solution });
    if (p.results && p.results.length > 0) {
      pages.push({ type: 'list', title: 'Key Results', items: p.results });
    }
    if (p.images && p.images.length > 0) {
      pages.push({ type: 'gallery', title: 'Key Visuals', images: p.images, tags: p.tags });
    } else {
      pages.push({
        type: 'tools',
        title: 'Tech Stack',
        tags: p.tags,
        note: 'No charts here — this project is a standalone desktop app, not a data notebook.',
      });
    }
    return pages;
  };

  const pages = selected ? getPages(selected) : [];

  const goNext = () => setPageIndex((i) => Math.min(i + 1, pages.length - 1));
  const goPrev = () => setPageIndex((i) => Math.max(i - 1, 0));

  // يقفل / يقلّب الصفحات بلوحة المفاتيح
  useEffect(() => {
    const handleKey = (e) => {
      if (!selected) return;
      if (e.key === 'Escape') closeBook();
      if (e.key === 'ArrowLeft') goNext();
      if (e.key === 'ArrowRight') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selected, pageIndex]);

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2>Selected Projects</h2>
          <p>Six real datasets, six full notebooks — click a book to open the case study.</p>
        </div>

        {/* ===== BOOKSHELF (مبعثر شوية) ===== */}
        <div className="bookshelf">
          {projects.map((project, index) => {
            const s = SCATTER[index % SCATTER.length];
            return (
              <button
                key={project.id}
                className="book"
                style={{ '--rot': `${s.rot}deg`, '--off': `${s.off}px` }}
                onClick={() => openBook(project)}
                aria-label={`Open ${project.title} case study`}
              >
                <div className="book-cover" style={{ '--book-color': project.color }}>
                  <span className="book-spine"></span>
                  <span className="book-index">0{index + 1}</span>

                  <div>
                    <h3 className="book-title">{project.title}</h3>
                    <p className="book-tagline">{project.shortDesc}</p>
                  </div>

                  <span className="book-open-hint">Open case study →</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ===== READER (الكتاب مفتوح وصفحاته بتتقلب) ===== */}
      {selected && (
        <div className="modal-overlay" onClick={closeBook}>
          <div
            className="book-reader"
            style={{ '--book-color': selected.color }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeBook} aria-label="Close">×</button>

            <div className="spread">
              {/* ===== الصفحة الشمال: غلاف الكتاب، ثابتة ===== */}
              <div className="page-left">
                <span
                  className="tag"
                  style={{ color: selected.color, borderColor: selected.color }}
                >
                  {selected.tagLabel}
                </span>
                <h2>{selected.title}</h2>
                <p className="modal-description">{selected.description}</p>
                <p className="left-page-count">{pageIndex + 1} / {pages.length}</p>
              </div>

              {/* ===== الصفحة اليمين: بتتقلب مع كل ضغطة ===== */}
              <div className="page-right" key={pageIndex}>
                {pages[pageIndex].type === 'text' && (
                  <div className="page-text">
                    <h3>{pages[pageIndex].title}</h3>
                    <p className="modal-description">{pages[pageIndex].body}</p>
                  </div>
                )}

                {pages[pageIndex].type === 'list' && (
                  <div className="page-text">
                    <h3>{pages[pageIndex].title}</h3>
                    <ul>
                      {pages[pageIndex].items.map((r, i) => (
                        <li key={i}>{r}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {pages[pageIndex].type === 'gallery' && (
                  <div className="page-text">
                    <h3>{pages[pageIndex].title}</h3>
                    <div className="modal-gallery">
                      {pages[pageIndex].images.map((img, i) => (
                        <figure key={i}>
                          <img src={img.src} alt={img.caption} loading="lazy" />
                          <figcaption>{img.caption}</figcaption>
                        </figure>
                      ))}
                    </div>
                    <div className="modal-tags" style={{ marginTop: '1rem' }}>
                      {pages[pageIndex].tags?.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                )}

                {pages[pageIndex].type === 'tools' && (
                  <div className="page-text">
                    <h3>{pages[pageIndex].title}</h3>
                    <div className="modal-tags">
                      {pages[pageIndex].tags?.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                    <p className="modal-note">{pages[pageIndex].note}</p>
                  </div>
                )}
              </div>
            </div>

            <div className="reader-nav">
              <button onClick={goPrev} disabled={pageIndex === 0} className="page-btn">‹ Previous </button>
              <span className="page-count">{pageIndex + 1} / {pages.length}</span>
              <button onClick={goNext} disabled={pageIndex === pages.length - 1} className="page-btn"> Next ›</button>
            </div>

            {selected.link && (
              <a
                href={selected.link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary reader-link"
              >
                View on GitHub
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;