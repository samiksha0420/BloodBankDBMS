import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);

  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div>
          {/* Navbar */}
          <nav
            style={{
              backgroundColor: "#c91c1c",
              color: "#f2f2f2",
              position: "fixed",
              top: 0,
              width: "100%",
              zIndex: 999,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "10px 30px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <a
              href="#"
              style={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                color: "#f2f2f2",
                textDecoration: "none",
              }}
            >
              BloodBank<span style={{ color: "#ffffff" }}>+</span>
            </a>
            <div>
              <a
                href="#about"
                style={{
                  color: "#f2f2f2",
                  marginRight: "20px",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                About
              </a>
              <a
                href="#contact"
                style={{
                  color: "#f2f2f2",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
              >
                Contact
              </a>
            </div>
          </nav>

          {/* Hero/Login Section (Full Screen) */}
          <div
            style={{
              backgroundImage: `url('/assets/images/bg.jpg')`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "80px",
            }}
          >
            <div
              className="card shadow p-4 bg-white rounded"
              style={{
                maxWidth: "400px",
                width: "100%",
                backgroundColor: "#ffffff",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(150, 20, 20, 0.3)",
                padding: "30px",
              }}
            >
              <Form
                formTitle={"Login to BloodBank+"}
                submitBtn={"Login"}
                formType={"login"}
              />
            </div>
          </div>

          {/* Scrollable Footer Section */}
          <footer
            id="about"
            style={{
              backgroundColor: "#000000",
              color: "#f2f2f2",
              padding: "40px 30px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            <div style={{ maxWidth: "300px" }}>
              <h5 style={{ fontWeight: "bold" }}>About</h5>
              <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
                BloodBank+ is a platform committed to saving lives by connecting
                blood donors with hospitals and individuals in need. We make the
                donation process smoother, faster, and more efficient.
              </p>
            </div>
            <div id="contact" style={{ maxWidth: "300px" }}>
              <h5 style={{ fontWeight: "bold" }}>Contact Us</h5>
              <p style={{ fontSize: "14px", lineHeight: "1.5" }}>
                📧 Email: support@bloodbank.com <br />
                📞 Phone: +91 9876543210 <br />
                📍 Location: Pune, India
              </p>
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

export default Login;
