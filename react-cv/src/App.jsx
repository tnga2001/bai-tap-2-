const css = `
.cv{max-width:760px;margin:30px auto;padding:32px;font-family:Arial,sans-serif;color:#222;
  border:1px solid #ddd;border-radius:8px;line-height:1.5}
.cv-header{display:flex;gap:20px;align-items:center;border-bottom:3px solid #c0392b;padding-bottom:16px}
.cv-avatar{width:96px;height:96px;border-radius:50%;background:#c0392b;color:#fff;
  display:flex;align-items:center;justify-content:center;font-size:36px;font-weight:bold}
.cv-header h1{margin:0;font-size:28px}
.cv-header p{margin:2px 0;color:#555}
.cv-section{margin-top:24px}
.cv-section h2{color:#c0392b;font-size:18px;border-left:4px solid #c0392b;padding-left:8px}
.skill{margin:8px 0}
.skill-bar{height:8px;background:#eee;border-radius:4px;overflow:hidden}
.skill-fill{height:100%;background:#c0392b}
.project{margin:10px 0;padding:10px 14px;background:#f7f7f7;border-radius:6px}
.project h3{margin:0 0 4px;font-size:16px}
.tag{display:inline-block;margin:4px 4px 0 0;padding:2px 8px;font-size:12px;
  background:#c0392b;color:#fff;border-radius:10px}
`;

const profile = {
  name: "Nguyễn Văn A",
  title: "Sinh viên Công nghệ thông tin – Front-end Developer",
  email: "vana@example.com",
  phone: "0123 456 789",
  address: "Hà Nội, Việt Nam",
};

const skills = [
  { name: "HTML / CSS", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 70 },
  { name: "Git / GitHub", level: 65 },
];

const projects = [
  {
    name: "Virtual Calculator",
    desc: "Máy tính ảo xây dựng bằng React với component Display và Button.",
    tech: ["React", "useState"],
  },
  {
    name: "Trang CV cá nhân",
    desc: "Trang giới thiệu bản thân (Buổi 2–3), chuyển sang React.",
    tech: ["HTML", "CSS", "React"],
  },
  {
    name: "Todo List",
    desc: "Ứng dụng quản lý công việc: thêm, xoá, đánh dấu hoàn thành.",
    tech: ["JavaScript", "DOM"],
  },
];


function Section({ title, children }) {
  return (
    <section className="cv-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function Header({ name, title, email, phone, address }) {
  return (
    <header className="cv-header">
      <div className="cv-avatar">{name.split(" ").pop()[0]}</div>
      <div>
        <h1>{name}</h1>
        <p>{title}</p>
        <p>{email} | {phone} | {address}</p>
      </div>
    </header>
  );
}

function SkillItem({ name, level }) {
  return (
    <div className="skill">
      <div>{name} ({level}%)</div>
      <div className="skill-bar">
        <div className="skill-fill" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

function SkillList({ skills }) {
  return skills.map((s) => <SkillItem key={s.name} name={s.name} level={s.level} />);
}

function ProjectCard({ name, desc, tech }) {
  return (
    <div className="project">
      <h3>{name}</h3>
      <div>{desc}</div>
      {tech.map((t) => <span className="tag" key={t}>{t}</span>)}
    </div>
  );
}

function ProjectList({ projects }) {
  return projects.map((p) => <ProjectCard key={p.name} {...p} />);
}

export default function CV() {
  return (
    <>
      <style>{css}</style>
      <div className="cv">
        <Header {...profile} />

        <Section title="Giới thiệu">
          <p>
            Sinh viên năm cuối yêu thích xây dựng giao diện web, đang học React
            và mong muốn thực tập ở vị trí Front-end.
          </p>
        </Section>

        <Section title="Kỹ năng">
          <SkillList skills={skills} />
        </Section>

        <Section title="Dự án">
          <ProjectList projects={projects} />
        </Section>
      </div>
    </>
  );
}
