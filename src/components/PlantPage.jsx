
import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch plants when the page loads
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch plants");
        }
        return response.json();
      })
      .then((data) => {
        setPlants(data);
      })
      .catch((error) => {
        console.error("Error fetching plants:", error);
      });
  }, []);

  // Add a new plant
  
function addPlant(newPlant) {
  fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlant),
  })
    .then((response) => response.json())
    .then((plant) => {
      setPlants((previousPlants) => [...previousPlants, plant]);
    })
    .catch((error) => {
      console.error("Error adding plant:", error);
    });
}


  // Filter plants based on search
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={addPlant} />

      <Search onSearch={setSearchQuery} />

      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;

