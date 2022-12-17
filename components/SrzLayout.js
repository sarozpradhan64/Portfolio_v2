import Head from "next/head";
import Link from "next/link";
import React from "react";
import Meta from "./Meta";
import data from "../src/data";
export default function SrzLayout({ children, isContactPage = false }) {
  const socials = data.socials;
  const links = data.routes;
  return (
    <div>
      <Meta />
      <nav
        className="fixed-top py-4 px-4 px-5 d-flex justify-content-between"
        data-wow-delay="0.1s"
      >
        <div className="">
          <Link href={"/"} className="h1 fw-bold text-primary">
            SRZ
          </Link>
        </div>

        {/* nav */}
        <div>
          {links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              className="text-white px-4 py-2 bg-primary mx-2 rounded-pill"
            >
              {link.title.toUpperCase()}
            </Link>
          ))}
        </div>
      </nav>

      <div className="py-6">{children}</div>

      {/* footer  */}
      <div className="container-fluid bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <Link className="border-bottom text-secondary" href="/">
                Saroj Pradhan
              </Link>
            </div>

            {/* hide these in contact page  */}
            {!isContactPage && (
              <div className="col-md-6 d-flex justify-content-md-end justify-content-center text-center text-md-start mb-3 mb-md-0">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    rel="noreferrer"
                    className="btn btn-square btn-primary mx-1 fs-5"
                    href={social.href}
                    target={"_blank"}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <a
        rel="noreferrer"
        href="#"
        className="btn btn-lg btn-primary btn-lg-square back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}
