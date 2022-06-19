import React from "react";
import {
  Box,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { db } from "../../Firebase";
import Card from "../../Component/Card";
import { Line, Doughnut } from "react-chartjs-2";
import "chart.js/auto";

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
  labels: ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"],
  datasets: [
    {
      label: "Aktivitas",
      backgroundColor: "#2DA6F4",
      borderColor: "#2DA6F4",
      borderWidth: 2,
      data: [15, 8, 20, 32, 35, 56, 40, 25, 21, 30, 30, 10],
    },
  ],
};

const Linechart = () => (
  <Box w="2xl">
    <Line
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

const Doughnutchar = ({ data }) => (
  <Box>
    <Doughnut data={data} />
  </Box>
);

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

  const totalTransact = transact.map((doc) => {
    return (totalTransaksi += Number(doc["data"]["amount"]));
  });

  //fungsi ini berguna untuk mengkalkulasi keuntungan 10% dari setiap transaksi dan menjumlahkan nya semua

  const withdrawal = transact.map((doc) => {
    return (pendapatan += Percentage(Number(doc["data"]["amount"]), 10));
  });

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

  const data2 = {
    labels: ["Pendapatan", "Pengeluaran", "Total Transaksi"],
    datasets: [
      {
        label: "# of Votes",
        data: [
          Number(pendapatan),
          Number(totalTransaksi - pendapatan),
          Number(totalTransaksi),
        ],
        backgroundColor: ["#9AF573", "#F7984F", "#B3C7F3"],
        borderColor: ["#9AF573", "#F7984F", "#B3C7F3"],
        borderWidth: 1,
      },
    ],
  };

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
      <HStack>
        <Box>
          <Text fontSize="2xl" color="black" mt={10}>
            Trafik pengguna
          </Text>
          <Linechart />
        </Box>
        <Box>
          <Text fontSize="2xl" color="black" mt={10}>
            Transaksi
          </Text>
          <Doughnutchar data={data2} />
        </Box>
      </HStack>
    </Box>
  );
}
