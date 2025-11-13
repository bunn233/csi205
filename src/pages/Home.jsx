import "bootstrap/dist/css/bootstrap.min.css";

const student = {
  photo: "./src/assets/me.jpg",
  id: "67171993",
  name: "นาย ธีรเดช แน่นอุดร",
  year: "ปีที่ 2",
  major: "เทคโนโลยีสารสนเทศ",
  faculty: "วิทยาการคอมพิวเตอร์และนวัตกรรมการพัฒนาซอฟต์แวร์",
  university: "มหาวิทยาลัยศรีปทุม",
  intro:
    "สวัสดีครับชื่อเล่นชื่อ แบงค์ครับ ชอบฟังเพลงตอนทำงาน ชอบทุกอย่างที่กินได้ ชอบเล่นเกมด้วย ยินดีที่ได้รู้จักครับ",
};

function Home() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <div className="mb-3">
                <img
                  src={student.photo}
                  alt="student"
                  className="rounded-circle img-fluid"
                  style={{ width: 160, height: 160, objectFit: "cover" }}
                />
              </div>

              <h5 className="card-title">{student.name}</h5>
              <p className="text-muted mb-1">รหัสนักศึกษา: {student.id}</p>

              <p className="mb-1">
                {student.year} / {student.major}
              </p>
              <p className="mb-3">
                {student.faculty} {student.university}
              </p>

              <hr />

              <h6 className="text-start">แนะนำตัวสั้น ๆ</h6>
              <p className="text-start">{student.intro}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
