import styles from "./Dashboard.module.css";
import { use, useState } from "react";
const Dashboard = () => {
    const initialPatients = JSON.parse(localStorage.getItem("patients")) || [
    {name:"Hardy Sandhu", disease:"Cancer"},
    {name:"David Head", disease:"Piles"}];
    const [patients, setPatient] = useState(initialPatients);

  let addHandler = () => {
    const updated = [...patients, { key:Date.now(),name: "", disease: "", urgency: "" }];
    setPatient(updated);
    localStorage.setItem("patients", JSON.stringify(updated));
  };

  let removeHandler = (index)=>{
    const updated = patients.filter((x,i)=>{if(i==index){return false}return true})
    setPatient(updated);
    localStorage.setItem("patients", JSON.stringify(updated));
  }
  return (
    <div className={styles.container}>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>H.Care</div>

        <nav className={styles.nav}>
          <button className={`${styles.navItem} ${styles.active}`}>
            Dashboard
          </button>
          <button className={styles.navItem}>patients</button>
          <button className={styles.navItem}>Patients</button>
          <button className={styles.navItem}>Calendar</button>
          <button className={styles.navItem}>Reports</button>
          <button className={styles.navItem}>Settings</button>
        </nav>

        <button className={styles.logout}>Logout</button>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        {/* Header */}
        <div className={styles.header}>
          <h2>Dashboard</h2>
          <div className={styles.user}>
            <span className={styles.avatar}></span>
            <span>Alice Morgan</span>
          </div>
        </div>

        {/* Stats */}
        <div className={styles.stats}>
          <div className={styles.card}>
            <h3>324</h3>
            <p>Patients per month</p>
          </div>

          <div className={styles.card}>
            <h3>159</h3>
            <p>New patients</p>
          </div>

          <div className={styles.card}>
            <h3>165</h3>
            <p>Satisfied patients</p>
          </div>
        </div>

        {/* Patients List */}
        <div className={styles.section}>
          <h3>Our patients</h3>

          <div className={styles.patientList}>
            {patients.map((patient,index) => (
              <div key={index} className={styles.patientCard}>
                {/* ❌ Delete Button */}
                <button className={styles.closeBtn} onClick={()=>{removeHandler(index)}}>×</button>

                <div className={styles.patientInfo}>
                  <div className={styles.avatarSmall}></div>
                  <div>
                    {
                    patient.name!==""?<p className={styles.name}>{patient.name}</p>:<input placeholder="Enter Name"></input>
                }
                  </div>
                </div>

                {
                    patient.disease!==""?<>
                    <p className={styles.meta}>{patient.disease}</p>
                    <button className={styles.messageBtn}>Message</button></>

                    :
                    <>
                    <input placeholder="Disease"></input>
                    <button className={styles.messageBtn}>Create</button></>
                
                }
              </div>
            ))}
            
            <button className={styles.messageBtn} onClick={addHandler}>
              Add more
            </button>
          </div>
        </div>
      </main>

      {/* Right Panel */}
      <aside className={styles.rightPanel}>
        <div className={styles.appointments}>
          <h3>Appointments</h3>

          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className={styles.appointmentCard}>
              <div className={styles.avatarSmall}></div>
              <div>
                <p className={styles.name}>Kate Bishop</p>
                <span className={styles.meta}>24.09.19 at 9:00 am</span>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export default Dashboard;
