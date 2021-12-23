import React from 'react';
import 'bootstrap/dist/css/bootstrap/min.css';

export default function Footer() {
  return (
    <footer class="footer py-4">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4 text-lg-start">
            Copyright &copy;Alfonso Robles®
          </div>
          <div class="col-lg-4 my-3 my-lg-0">
            <a
              class="btn btn-dark btn-social mx-2"
              href="https://twitter.com/Fons3517"
              target="_blank"
              rel='noreferrer'
            ><i class="fab fa-twitter"></i
            ></a>
            {/*<a
              class="btn btn-dark btn-social mx-2"
              href="https://www.facebook.com/"
              target="_blank"
              rel='noreferrer'

            ><i class="fab fa-facebook-f"></i
            ></a>*/}
            <a
              class="btn btn-dark btn-social mx-2"
              href="https://www.linkedin.com/in/alfonso-robles-3517-agr/"
              target="_blank"
              rel='noreferrer'

            ><i class="fab fa-linkedin-in"></i
            ></a>
            <a
              className="btn btn-dark btn-social mx-2"
              href="https://github.com/fons3517"
              target="_blank"
              rel='noreferrer'

            ><i class="fab fa-github-in"></i
            ></a>

          </div>
        </div>
      </div>
    </footer>

  );
}