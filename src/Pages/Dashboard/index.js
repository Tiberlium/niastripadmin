import React from "react";
import {
  Box,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { BsChevronRight } from "react-icons/bs";

import { db } from "../../Firebase";

import Card from "../../Component/Card";

import { Bar } from "react-chartjs-2";
import 'chart.js/auto';

const Navbread = () => (
  <Breadcrumb spacing="8px" separator={<BsChevronRight color="gray.500" />}>
    <BreadcrumbItem>
      <BreadcrumbLink as={Link} to="#" isCurrentPage>
        Home
      </BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
);

const data = {
  labels: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  datasets: [
    {
      label: "Average Salary Amount USD($)",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [34, 65, 78, 89, 35, 56, 66, 84, 21, 67, 87, 78],
    },
  ],
};

export default function Dashboard() {
  const [transact, settransact] = React.useState([]);
  const [user, setuser] = React.useState([]);
  const isMounted = React.useRef();
  let totalTransaksi = 0;
  let pendapatan = 0;

  function formatRupiah(uang) {
    return new Intl.NumberFormat("ID-id", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(uang);
  }

  function Percentage(num, per) {
    return (num / 100) * per;
  }

  async function getTransaksi() {
    let x = [];
    const docRef = await db.collection("Transaksi").get();

    docRef.docs.map((doc) => {
      x.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    if (isMounted.current) return settransact(x);
  }

  async function getuser() {
    let y = [];

    const docRef = await db.collection("Users").get();

    docRef.docs.map((doc) => {
      y.push({
        id: doc.id,
        data: doc.data(),
      });
    });

    if (isMounted.current) return setuser(y);
  }

  React.useEffect(() => {
    isMounted.current = true;
    getuser();
    return () => (isMounted.current = false);
  }, []);

  React.useEffect(() => {
    isMounted.current = true;
    getTransaksi();
    return () => (isMounted.current = false);
  }, []);

  const totalTransact = transact.map((doc) => {
    return (totalTransaksi += Number(doc["data"]["amount"]));
  });

  //fungsi ini berguna untuk mengkalkulasi keuntungan 10% dari setiap transaksi dan menjumlahkan nya semua

  const withdrawal = transact.map((doc) => {
    return (pendapatan += Percentage(Number(doc["data"]["amount"]), 10));
  });

  return (
    <Box>
      <Navbread />
      <Text fontSize="5xl" mb="12">
        Dashboard anda
      </Text>
      <Card
        pengguna={user.length}
        transaksi={transact.length}
        total={formatRupiah(totalTransaksi)}
        pendapatan={formatRupiah(pendapatan)}
      />
      <Text fontSize="2xl" color="black" mt={10}>
        Aktivitas Transaksi
      </Text>
      <Bar
        data={data}
        options={{
          title: {
            display: true,
            text: "Average Employee Salary per Month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </Box>
  );
}
