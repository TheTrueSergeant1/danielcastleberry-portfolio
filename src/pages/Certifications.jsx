import React from 'react';

const CertCard = ({ title, issuer, date, status, desc, tags }) => {
  const isAchieved = status === 'Achieved';
  
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-cyber-border bg-cyber-card p-8 hover:border-cyber-accent/50 transition-all duration-500">
      <div className={`absolute -right-10 -top-10 h-40 w-40 blur-[50px] transition-all ${isAchieved ? 'bg-cyber-accent/10 group-hover:bg-cyber-accent/20' : 'bg-white/5 group-hover:bg-white/10'}`} />
      
      <div className="flex justify-between items-start mb-2">
        <span className={`text-xs font-mono ${isAchieved ? 'text-cyber-accent' : 'text-neutral-500'}`}>
          {date}
        </span>
        <span className={`text-xs px-2 py-1 rounded-full border ${isAchieved ? 'border-cyber-accent/30 text-cyber-accent bg-cyber-accent/10' : 'border-white/10 text-neutral-400 bg-white/5'}`}>
          {status}
        </span>
      </div>
      
      <h3 className="text-2xl font-bold mb-1">{title}</h3>
      <p className="text-neutral-500 text-sm mb-4">{issuer}</p>
      <p className="text-neutral-400 mb-6">{desc}</p>
      
      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full bg-white/5 text-xs text-neutral-300 border border-white/10">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

const Certifications = () => {
  return (
    <div className="pt-32 px-6 md:px-24 max-w-7xl mx-auto pb-24">
      <h1 className="text-5xl font-bold mb-12">Certifications</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        <CertCard 
          title="CompTIA Security+ (SY0-701)"
          issuer="CompTIA"
          date="Jul 2026"
          status="Achieved"
          desc="Passed with a score of 770. Validates foundational knowledge of cybersecurity principles, threat analysis, risk mitigation, and secure network architecture."
          tags={['Network Security', 'Cryptography', 'Risk Management']}
        />

        <CertCard 
          title="Cisco Certified Network Associate"
          issuer="Cisco (CCNA)"
          date="Current"
          status="In Progress"
          desc="Deepening expertise in network infrastructure, routing protocols (OSPF, EIGRP), switching, and IPv4/IPv6 addressing."
          tags={['Routing', 'Switching', 'Network Infrastructure']}
        />

        <CertCard 
          title="Certified Ethical Hacker"
          issuer="EC-Council (CEH)"
          date="Upcoming"
          status="Planned"
          desc="Building practical skills in vulnerability assessment, penetration testing methodologies, and proactive cyber defense."
          tags={['Penetration Testing', 'Vulnerability Assessment', 'Ethical Hacking']}
        />

      </div>
    </div>
  );
};

export default Certifications;
