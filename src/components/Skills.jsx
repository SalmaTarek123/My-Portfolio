import React, { useState } from 'react';
import './components.css';

const Skills = () => {
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [certificatePopup, setCertificatePopup] = useState(null);

  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: '💻',
      skills: ['Python', 'Java', 'C++'],
      color: '#EC4899',
    },
    {
      category: 'Data Science & ML',
      icon: '📊',
      skills: [
        { name: 'Data Analysis', note: 'Power BI, Data Cleaning, EDA' },
        { name: 'Machine Learning', note: 'Regression, Classification, Clustering' },
        { name: 'Data Visualization', note: 'Matplotlib, Seaborn, Plotly' },
        { name: 'Multivariate Analysis', note: 'PCA, Feature Selection' },
        { name: 'Data Compression', note: 'RLE, Golomb, LZW, Arithmetic Coding' },
      ],
      color: '#DB2777',
    },
    {
      category: 'Databases',
      icon: '🗄️',
      skills: ['MySQL', 'PostgreSQL', 'MongoDB'],
      color: '#A992C9',
    },
    {
      category: 'Web Development',
      icon: '🌐',
      skills: [
        { name: 'HTML, CSS, JavaScript', cert: 'iti', certName: 'Web Development with PHP', certDate: '2025' },
        { name: 'React' },
        { name: 'Node.js' },
        { name: 'PHP' },
      ],
      color: '#7FBFA0',
    },
    {
      category: 'Mobile Development',
      icon: '📱',
      skills: [
        { name: 'Android (Java & Kotlin)', cert: 'route', certName: 'Android Development Course', certDate: '2024' },
        
      ],
      color: '#D9B36B',
    },
    {
      category: 'Other',
      icon: '⚙️',
      skills: ['OOP', 'Data Structures & Algorithms', 'Software Engineering' , 'Problem Solving'],
      color: '#C2410C',
    },
  ];

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <section style={{ backgroundColor: '#ffffff', padding: '50px 0', borderTop: '1px solid rgba(236, 72, 153, 0.1)' }}>
      <div className="container">
        <div className="section-header" style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 1.8rem)' }}>Skills & Technologies</h2>
          <p style={{ fontSize: '0.95rem' }}>
            A toolkit of languages, frameworks, and tools I use to build data solutions.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.2rem',
          maxWidth: '1100px',
          margin: '0 auto',
        }}>
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              style={{
                backgroundColor: cat.color + '06',
                border: `1.5px solid ${cat.color}22`,
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Header - Clickable */}
              <button
                onClick={() => toggleCategory(cat.category)}
                style={{
                  width: '100%',
                  padding: '1.2rem 1.4rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = cat.color + '08';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <span style={{ fontSize: '1.4rem' }}>{cat.icon}</span>
                  <h3 style={{
                    color: cat.color,
                    margin: 0,
                    fontSize: '1rem',
                    fontWeight: '700',
                    fontFamily: 'Archivo, sans-serif',
                    textAlign: 'left',
                  }}>
                    {cat.category}
                  </h3>
                </div>
                <span style={{
                  fontSize: '1.2rem',
                  color: cat.color,
                  transition: 'transform 0.3s ease',
                  transform: expandedCategory === cat.category ? 'rotate(180deg)' : 'rotate(0deg)',
                }}>
                  ▼
                </span>
              </button>

              {/* Skills - Expandable */}
              {expandedCategory === cat.category && (
                <div style={{
                  padding: '0 1.4rem 1.2rem 1.4rem',
                  borderTop: `1px solid ${cat.color}22`,
                  animation: 'slideDown 0.3s ease',
                }}>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.6rem',
                  }}>
                    {cat.skills.map((skill, i) => {
                      const skillName = typeof skill === 'string' ? skill : skill.name;
                      const skillNote = skill.note;
                      const hasCert = skill.cert;

                      return (
                        <div
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            padding: '0.5rem 0.9rem',
                            backgroundColor: cat.color + '12',
                            border: `0.8px solid ${cat.color}33`,
                            borderRadius: '18px',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = cat.color + '24';
                            e.currentTarget.style.transform = 'scale(1.05)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = cat.color + '12';
                            e.currentTarget.style.transform = 'scale(1)';
                          }}
                        >
                          <span style={{
                            fontSize: '0.8rem',
                            fontWeight: '500',
                            fontFamily: 'Archivo, sans-serif',
                            color: cat.color,
                          }}>
                            {skillName}
                            {skillNote && <span style={{ fontSize: '0.7rem', opacity: 0.8 }}> ({skillNote})</span>}
                          </span>

                          {hasCert && (
                            <button
                              onClick={() => setCertificatePopup({
                                name: skill.certName,
                                date: skill.certDate,
                                org: hasCert === 'iti' ? 'Information Technology Institute (ITI)' : 'Route Academy',
                                cert: hasCert,
                              })}
                              style={{
                                padding: '2px 6px',
                                backgroundColor: cat.color + '22',
                                border: `0.8px solid ${cat.color}44`,
                                borderRadius: '12px',
                                cursor: 'pointer',
                                fontSize: '0.65rem',
                                fontWeight: '600',
                                color: cat.color,
                                transition: 'all 0.2s ease',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = cat.color + '44';
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = cat.color + '22';
                              }}
                              title="View Certificate"
                            >
                              📜
                            </button>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Popup */}
      {certificatePopup && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '1.5rem',
          }}
          onClick={() => setCertificatePopup(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '2rem',
              maxWidth: '500px',
              width: '100%',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              textAlign: 'center',
            }}
          >
            <button
              onClick={() => setCertificatePopup(null)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#9ca3af',
              }}
            >
              ✕
            </button>

            <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📜</div>

            <h3 style={{
              color: '#1f2937',
              marginBottom: '0.5rem',
              fontSize: '1.2rem',
              fontWeight: '700',
            }}>
              {certificatePopup.name}
            </h3>

            <p style={{
              color: '#6b7280',
              marginBottom: '0.5rem',
              fontSize: '0.95rem',
            }}>
              {certificatePopup.org}
            </p>

            <p style={{
              color: '#9ca3af',
              marginBottom: '1.5rem',
              fontSize: '0.85rem',
            }}>
              Year: {certificatePopup.date}
            </p>

            {/* Certificate Image Placeholder */}
            <div style={{
              backgroundColor: '#f3f4f6',
              border: '2px dashed #e5e7eb',
              borderRadius: '12px',
              padding: '2rem',
              marginBottom: '1.5rem',
              minHeight: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#9ca3af',
              fontSize: '0.9rem',
            }}>
              Certificate Image
              <br />
              (Add your certificate image here)
            </div>

            <button
              onClick={() => setCertificatePopup(null)}
              style={{
                padding: '0.75rem 1.5rem',
                backgroundColor: '#EC4899',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '0.9rem',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Slide Down Animation */}
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;