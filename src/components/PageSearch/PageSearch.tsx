"use client";

import { useState } from "react";
import Search from "../Search/Search";

const PageSearch = () => {
  const [roomTypeFilter, setRoomTypeFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleRoomTypeChange = (roomType: string) => {
    setRoomTypeFilter(roomType);
  };

  const handleSearchQueryChange = (searchQuery: string) => {
    setSearchQuery(searchQuery);
  };

  return (
    <Search
      roomTypeFilter={roomTypeFilter}
      searchQuery={searchQuery}
      setRoomTypeFilter={handleRoomTypeChange}
      setSearchQuery={handleSearchQueryChange}
    />
  );
};

export default PageSearch;
