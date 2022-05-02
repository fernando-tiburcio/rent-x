import React, { useEffect, useState } from "react";
import { CarDTO } from "../../dtos/CarDTO";
import { api } from "../../services/api";

import { Load } from "../../components/Load";

import { Container } from "./styles";

export function MyCars() {
  const [cars, setCars] = useState<CarDTO[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchMyCars() {
    const schedules = await api.get(`/schedules_byuser/${1}`);
    console.log(schedules.data);
    if (schedules.data.length) {
      setCars(schedules.data);
    }
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    fetchMyCars();
  }, []);

  return <>{loading ? <Load /> : <Container></Container>}</>;
}
