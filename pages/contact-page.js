import Image from "next/image";
import React from "react";
import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout title="Contact">
      <div className="bg-white text-center shadow-xl p-8 w-80 rounded">
        <div className="mt-4">
          <p className="font-bold">Contact info</p>
        </div>
        <div className="flex justify-center mt-4">
          <Image
            className="rouded-full"
            src="/vercel.svg"
            width={60}
            height={60}
            alt="Avater"
          />
        </div>
        <div className="mt-4">
          <p className="font-bold">Address</p>
          <p className="test-xs mt-2 text-gray-600">city A</p>
          <p className="font-bold mt-3">E-mail</p>
          <p className="text-xs mt-2 text-gray-600">test@gmail.com</p>
          <p className="font-bold mt-3">Phone</p>
          <p className="text-xs mt-2 text-gray-600">000-000-123</p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
