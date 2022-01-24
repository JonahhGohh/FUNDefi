import React, { useEffect, useState } from "react";
import {
  Container,
  Card,
  CardGroup,
  ButtonGroup,
  ProgressBar,
} from "react-bootstrap";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import nft from "./images/RainforestNFT_1.jpg";
import Box from "@mui/material/Box";
import { Switch, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { borderRadius } from "@mui/system";

export const Mint = () => {
  useEffect(() => {}, []);

  return (
    <div>
      <header className="App-header">
        <h1 style={{ marginTop: "5px", color: "white" }}>
          Create single collectible
        </h1>
        <Stack style={{ marginLeft: "80px", marginRight: "80px" }}>
          <Stack
            direction="row"
            spacing={10}
            style={{ marginLeft: "80px", marginRight: "80px" }}
          >
            <Stack>
              <label style={{ textAlign: "left" }}>Upload file</label>
              <Box
                sx={{
                  width: 300,
                  height: 300,
                  backgroundColor: "primary.dark",
                }}
              >
                <img width="100%" src={nft}></img>
              </Box>
            </Stack>
            <Stack>
              <label style={{ textAlign: "left" }}>Preview file</label>
              <Box sx={{ width: 150, height: 150 }}>
                <Stack direction="row" spacing={2}>
                  <Button variant="outlined">
                    <BookmarksIcon />
                  </Button>
                </Stack>
                <img width="100%" src={nft}></img>
              </Box>
            </Stack>
          </Stack>
          {/* Idk how to align the switch buttons correctly so i am just hard coding */}
          <Stack
            direction="row"
            spacing={25}
            style={{ marginLeft: "80px", marginRight: "80px" }}
          >
            <h4 style={{ color: "lightblue" }}>Put on sale</h4>
            <Switch></Switch>
          </Stack>
          <h6 style={{ textAlign: "left", marginLeft: "80px" }}>
            You will receive bids on this item
          </h6>
          <Stack
            direction="row"
            spacing={17}
            style={{ marginLeft: "80px", marginRight: "80px" }}
          >
            <h4 style={{ color: "lightblue" }}>Instant sale price</h4>
            <Switch></Switch>
          </Stack>
          <h6 style={{ textAlign: "left", marginLeft: "80px" }}>
            Enter the price for which the item will instantly be sold
          </h6>
          <Stack
            direction="row"
            spacing={8}
            style={{ marginLeft: "80px", marginRight: "80px" }}
          >
            <h4 style={{ color: "lightblue" }}>Unlock once purchased</h4>
            <Switch></Switch>
          </Stack>
          <h6 style={{ textAlign: "left", marginLeft: "80px" }}>
            Content will be unlocked after successful transaction
          </h6>
          <h3 style={{ textAlign: "left", marginLeft: "80px" }}>
            Choose collection
          </h3>
          <Stack direction="row" style={{ marginLeft: "80px" }}>
            <Box
              sx={{ border: 1, borderRadius: 3, borderColor: "primary.main" }}
            >
              <Button size="small">
                <AddIcon />
              </Button>
              <h6> New </h6>
            </Box>
            <Box
              sx={{ border: 1, borderRadius: 3, borderColor: "primary.main" }}
            >
              <Button size="small" color="primary">
                <BedroomBabyIcon />
              </Button>
              <h6> Rarible</h6>
            </Box>
          </Stack>
          <h4 style={{ textAlign: "left", marginLeft: "80px" }}>Name</h4>
          <TextField
            sx={{ input: { color: "white" } }}
            style={{ marginLeft: "80px" }}
            label="e.g. Rainbow Monkey"
            variant="filled"
          ></TextField>
          <h4 style={{ textAlign: "left", marginLeft: "80px" }}>
            Description (Optional)
          </h4>
          <TextField
            sx={{ input: { color: "white" } }}
            color="primary"
            style={{ marginLeft: "80px" }}
            label="e.g. Rainbow Monkey"
            variant="filled"
          ></TextField>
          <h4 style={{ textAlign: "left", marginLeft: "80px" }}>Royalties</h4>
          <TextField
            color="primary"
            sx={{ input: { color: "white" } }}
            style={{ marginLeft: "80px" }}
            label="e.g. Rainbow Monkey"
            variant="filled"
            InputProps={{
              endAdornment: <InputAdornment position="end">%</InputAdornment>,
            }}
          ></TextField>
          <h6 style={{ textAlign: "left", marginLeft: "80px" }}>
            Suggested: 10%, 20%, 30%
          </h6>
          <h4 style={{ textAlign: "left", marginLeft: "80px" }}>
            Properties (Optional)
          </h4>
          <Stack direction="row" style={{ marginleft: "80px" }}>
            <TextField
              color="primary"
              sx={{ input: { color: "white" } }}
              style={{ marginLeft: "80px" }}
              label="e.g. Size"
              variant="filled"
            ></TextField>
            <TextField
              color="primary"
              sx={{ input: { color: "white" } }}
              style={{ marginLeft: "80px" }}
              label="e.g. M"
              variant="filled"
            ></TextField>
          </Stack>
          <Button
            variant="contained"
            style={{ marginLeft: "320px", marginRight: "320px" }}
          >
            Create Item
          </Button>
        </Stack>
      </header>
    </div>
  );
};

export default Mint;
