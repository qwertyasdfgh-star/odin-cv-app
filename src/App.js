import React, { useState, useEffect } from 'react';
import './App.css';
import Preview from './components/Preview';
import GeneralInfo from './components/GeneralInfo';
import EducationSection from './components/EducationSection';
import PracticalSection from './components/PracticalSection';
import InterestsSection from './components/InterestsSection';
import SkillsSection from './components/SkillsSection';
import LanguagesSection from './components/LanguagesSection';
import ReferencesSection from './components/ReferencesSection';
import exampleProfile from '../src/images/profile.png';


function App() {
  const [viewMode, setViewMode] = useState('edit');

  // Load initial state from localStorage or use empty defaults
  const [generalInfo, setGeneralInfo] = useState(() => {
    const saved = localStorage.getItem('generalInfo');
    return saved ? JSON.parse(saved) : {
      name: '',
      email: '',
      phone: '',
      location: ''
    };
  });

  const [education, setEducation] = useState(() => {
    const saved = localStorage.getItem('education');
    return saved ? JSON.parse(saved) : [];
  });

  const [practical, setPractical] = useState(() => {
    const saved = localStorage.getItem('practical');
    return saved ? JSON.parse(saved) : [];
  });

  const [interests, setInterests] = useState(() => {
    const saved = localStorage.getItem('interests');
    return saved ? JSON.parse(saved) : [];
  });

  const [skills, setSkills] = useState(() => {
    const saved = localStorage.getItem('skills');
    return saved ? JSON.parse(saved) : [];
  });

  const [languages, setLanguages] = useState(() => {
    const saved = localStorage.getItem('languages');
    return saved ? JSON.parse(saved) : [];
  });

  const [references, setReferences] = useState(() => {
    const saved = localStorage.getItem('references');
    return saved ? JSON.parse(saved) : [];
  });

  // Save to localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem('generalInfo', JSON.stringify(generalInfo));
    localStorage.setItem('education', JSON.stringify(education));
    localStorage.setItem('practical', JSON.stringify(practical));
    localStorage.setItem('interests', JSON.stringify(interests));
    localStorage.setItem('skills', JSON.stringify(skills));
    localStorage.setItem('languages', JSON.stringify(languages));
    localStorage.setItem('references', JSON.stringify(references));
  }, [generalInfo, education, practical, interests, skills, languages, references]);

  // Example data for Fill Example button
  const exampleData = {
    general: {
      name: 'Kylie Vlad',
      email: 'vlad.kylie@email.com',
      phone: '(555) 123-4567',
      location: 'New York, NY',
      description: 'Experienced software developer with expertise in React and Node.js. Passionate about creating efficient and user-friendly applications.',
      image: exampleProfile,
    },
    educationList: [
      {
        id: 1,
        school: 'Harvard University',
        degree: 'Master of Computer Science',
        startDate: '2018',
        endDate: '2020',
        location: 'Cambridge, MA'
      },
      {
        id: 2,
        school: 'MIT',
        degree: 'Bachelor of Computer Science',
        startDate: '2014',
        endDate: '2018',
        location: 'Cambridge, MA'
      }
    ],
    practicalList: [
      {
        id: 1,
        company: 'Tech Solutions Inc.',
        position: 'Senior Software Developer',
        startDate: '2020',
        endDate: 'Present',
        location: 'New York, NY',
        responsibilities: '• Led team of 5 developers on major projects\n• Implemented new CI/CD pipeline\n• Reduced system downtime by 40%'
      }
    ],
    skillsList: [
      { id: 1, text: 'JavaScript' },
      { id: 2, text: 'React' },
      { id: 3, text: 'Node.js' },
      { id: 4, text: 'Python' }
    ],
    interestsList: [
      { id: 1, text: 'Drawing' },
      { id: 2, text: 'Photography' },
      { id: 3, text: 'Traveling' }
    ],
    languagesList: [
      { id: 1, language: 'English', proficiency: 'Native' },
      { id: 2, language: 'Spanish', proficiency: 'Intermediate' },
      { id: 3, language: 'French', proficiency: 'Basic' }
    ],
    referencesList: [
      { 
        id: 1,
        name: 'Dr. Jane Wilson',
        position: 'Senior Technical Lead',
        company: 'Tech Solutions Inc.',
        email: 'jane.wilson@techsolutions.com',
        phone: '(555) 234-5678'
      }
    ]
  };

  // Fill example data function
  const fillExampleData = () => {
    setGeneralInfo(exampleData.general);
    setEducation(exampleData.educationList);
    setPractical(exampleData.practicalList);
    setSkills(exampleData.skillsList);
    setInterests(exampleData.interestsList);
    setLanguages(exampleData.languagesList);
    setReferences(exampleData.referencesList);
  };

  // Clear all data function
  const clearAllData = () => {
    setGeneralInfo({ name: '', email: '', phone: '', location: '' });
    setEducation([]);
    setPractical([]);
    setInterests([]);
    setSkills([]);
    setLanguages([]);
    setReferences([]);
    localStorage.clear();
  };

  // Handler functions
  const updateGeneralInfo = (newData) => {
    setGeneralInfo({ ...generalInfo, ...newData });
  };

  const addEducation = () => {
    const newEducation = {
      id: Date.now(),
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      location: ''
    };
    setEducation([...education, newEducation]);
  };

  const updateEducation = (id, updatedEntry) => {
    setEducation(education.map(entry => 
      entry.id === id ? { ...entry, ...updatedEntry } : entry
    ));
  };

  const deleteEducation = (id) => {
    setEducation(education.filter(entry => entry.id !== id));
  };

  const addPractical = () => {
    const newPractical = {
      id: Date.now(),
      company: '',
      position: '',
      startDate: '',
      endDate: '',
      location: '',
      responsibilities: ''
    };
    setPractical([...practical, newPractical]);
  };

  const updatePractical = (id, updatedEntry) => {
    setPractical(practical.map(entry =>
      entry.id === id ? { ...entry, ...updatedEntry } : entry
    ));
  };

  const deletePractical = (id) => {
    setPractical(practical.filter(entry => entry.id !== id));
  };
  
  const addSkill = () => {
    const newSkill = {
      id: Date.now(),
      text: ''
    };
    setSkills([...skills, newSkill]);
  };

  const updateSkill = (id, newText) => {
    setSkills(skills.map(entry =>
      entry.id === id ? { ...entry, text: newText } : entry
    ));
  };

  const deleteSkill = (id) => {
    setSkills(skills.filter(entry => entry.id !== id));
  };

  const addInterest = () => {
    const newInterest = {
      id: Date.now(),
      text: ''
    };
    setInterests([...interests, newInterest]);
  };

  const updateInterest = (id, newText) => {
    setInterests(interests.map(interest =>
      interest.id === id ? { ...interest, text: newText } : interest
    ));
  };

  const deleteInterest = (id) => {
    setInterests(interests.filter(interest => interest.id !== id));
  };
  
  const addLanguage = () => {
    const newLanguage = {
      id: Date.now(),
      language: '',
      proficiency: ''
    };
    setLanguages([...languages, newLanguage]);
  };
  
  const updateLanguage = (id, updatedEntry) => {
    setLanguages(languages.map(entry =>
      entry.id === id ? { ...entry, ...updatedEntry } : entry
    ));
  };
  
  const deleteLanguage = (id) => {
    setLanguages(languages.filter(entry => entry.id !== id));
  };
  
  const addReference = () => {
    const newReference = {
      id: Date.now(),
      name: '',
      position: '',
      company: '',
      email: '',
      phone: ''
    };
    setReferences([...references, newReference]);
  };
  
  const updateReference = (id, updatedEntry) => {
    setReferences(references.map(entry =>
      entry.id === id ? { ...entry, ...updatedEntry } : entry
    ));
  };
  
  const deleteReference = (id) => {
    setReferences(references.filter(entry => entry.id !== id));
  };

  // Placeholders
  const placeholders = {
    general: {
      name: 'Full Name',
      email: 'email@example.com',
      phone: '(012) 345-6789',
      location: 'City, State',
      description: 'Brief description about yourself.',
    },
    education: {
      school: 'University Name',
      degree: 'Degree / Field of Study',
      startDate: 'Start Year',
      endDate: 'End Year',
      location: 'City, State'
    },
    practical: {
      company: 'Company Name',
      position: 'Job Title',
      startDate: 'Start Year',
      endDate: 'End Year / Present',
      location: 'City, State',
      responsibilities: '• Key responsibility\n• Another responsibility'
    },
    skills: {
      text: 'e.g., JavaScript, React, Node.js'
    },
    interests: {
      text: 'e.g., Drawing, Photography, Traveling'
    },
    languages: {
      language: 'e.g., English, Spanish, French',
      proficiency: ''
    },
    references: {
      name: 'Full Name',
      position: 'Current Position',
      company: 'Company Name',
      email: 'email@example.com',
      phone: '(555) 123-4567'
    }
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>CV Creator</h1>
        <p>Build your professional CV in minutes!</p>
      </header>

      <div className="mode-toggle">
        <button 
          className={`toggle-btn ${viewMode === 'edit' ? 'active' : ''}`}
          onClick={() => setViewMode('edit')}
        >
          Edit CV
        </button>
        <button 
          className={`toggle-btn ${viewMode === 'preview' ? 'active' : ''}`}
          onClick={() => setViewMode('preview')}
        >
          Preview CV
        </button>
        <button 
          className="toggle-btn"
          onClick={fillExampleData}
        >
          Fill Example
        </button>
      </div>

      <main className="main-content">
        {viewMode === 'edit' ? (
          <div className="forms-sidebar full-width">
            <button 
              className="clear-btn"
              onClick={clearAllData}
              title="Clear All Data"
            >
              <i className="fas fa-trash-alt"></i>
            </button>
            <GeneralInfo 
              data={generalInfo}
              onUpdate={updateGeneralInfo}
              placeholders={placeholders.general}
            />
            <EducationSection 
              entries={education}
              onAdd={addEducation}
              onUpdate={updateEducation}
              onDelete={deleteEducation}
              placeholders={placeholders.education}
            />
            <PracticalSection 
              entries={practical}
              onAdd={addPractical}
              onUpdate={updatePractical}
              onDelete={deletePractical}
              placeholders={placeholders.practical}
            />
            <ReferencesSection 
              entries={references}
              onAdd={addReference}
              onUpdate={updateReference}
              onDelete={deleteReference}
              placeholders={placeholders.references}
            />
            <SkillsSection 
              entries={skills}
              onAdd={addSkill}
              onUpdate={updateSkill}
              onDelete={deleteSkill}
              placeholders={placeholders.skills}
            />
            <LanguagesSection 
              entries={languages}
              onAdd={addLanguage}
              onUpdate={updateLanguage}
              onDelete={deleteLanguage}
              placeholders={placeholders.languages}
            />
            <InterestsSection 
              entries={interests}
              onAdd={addInterest}
              onUpdate={updateInterest}
              onDelete={deleteInterest}
              placeholders={placeholders.interests}
            />
          </div>
        ) : (
          <div className="preview-section full-width">
            <Preview 
              generalInfo={generalInfo}
              education={education}
              practical={practical}
              skills={skills} 
              interests={interests}
              languages={languages}
              references={references}
            />
          </div>
        )}
      </main>
    </div>
  );
}
export default App;