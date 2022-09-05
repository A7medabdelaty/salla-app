import React from "react";
import { Link } from "react-router-dom";
import "./css/footer.css";

export default function Footer() {
  return (
    <div class="footer pt-3 pb-3">
      <div class="container">
        <div class="row text-white-50">
          <div class="col-lg-4 col-md-6">
            <div class="info">
              <p class="mb-5">
                Pellentesque in ipsum id orci porta dapibus. Vivamus magna
                justo, lacinia eget consectetur sed, convallis at tellus.
              </p>
              <div class="copyright">
                Created By <span>Graphberry</span>
                <div>
                  &copy; 2022 - <span>Abdelaty Inc</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-4">
            <div class="links">
              <h5 class="text-white">Links</h5>
              <ul class="list-unstyled lh-lg">
                <li>
                  <Link to="" class="text-white-50">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="" class="text-white-50">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link to="" class="text-white-50">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="" class="text-white-50">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-2 col-md-4">
            <div class="links">
              <h5 class="text-white">About Us</h5>
              <ul class="list-unstyled lh-lg">
                <li>
                  <Link to="" class="text-white-50">
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to="" class="text-white-50">
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="" class="text-white-50">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="" class="text-white-50">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4 col-md-6">
            <div class="social">
              <h5 class="text-white">Contact Us</h5>
              <p class="mb-5 lh-lg">
                Get in touch with us via mail phone.We are waiting for your call
                or message
              </p>
              <div class="btn rounded-pill main-btn w-100 text-white">
                ahmed.abdelaty174@gmail.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
