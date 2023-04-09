import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
          ipsam excepturi deleniti deserunt perspiciatis nemo, suscipit dolorum
          accusantium ex corrupti?
        </p>
        <div className="flex flex-row md:w-[75%] my-6 justify-between">
          <FaFacebookSquare size={25} />
          <FaInstagram size={25} />
          <FaTwitterSquare size={25} />
          <FaGithubSquare size={25} />
          <FaDribbbleSquare size={25} />
        </div>
      </div>
      {/*  */}
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-500">Solutions</h6>
          <ul>
            <li className="py-2 text-sm">Analytics</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Commerce</li>
            <li className="py-2 text-sm">Insights</li>
          </ul>
        </div>

        {/*  */}

        <div>
          <h6 className="font-medium text-gray-500">Support</h6>
          <ul>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Documentation</li>
            <li className="py-2 text-sm">Guides</li>
            <li className="py-2 text-sm">API Status</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-500">Company</h6>
          <ul>
            <li className="py-2 text-sm">About</li>
            <li className="py-2 text-sm">Blog</li>
            <li className="py-2 text-sm">Jobs</li>
            <li className="py-2 text-sm">Press</li>
            <li className="py-2 text-sm">Careers</li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-gray-500">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
