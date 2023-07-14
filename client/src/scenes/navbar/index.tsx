import { useState } from 'react';
import { Link } from 'react-router-dom';
import TollIcon from '@mui/icons-material/Toll';
import { Box, Typography, useTheme } from '@mui/material';
import FlexBetween from '@/components/FlexBetween';

type Props = {}

const NavBar = (props: Props) => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState("dashboard")

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      <FlexBetween gap="0.75rem">
        <TollIcon sx={{ fontSize: "55px" }} />
        <Typography variant='h4' fontSize="16px">
          Finance Admin
        </Typography>
      </FlexBetween>

      <FlexBetween gap="2rem">
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
              color: selected === "dashboard" ? "inherit" : palette.grey[700],
              fontSize: "16px",
              textDecoration:  selected === "dashboard" ? "underline" : "inherit",
              textDecorationThickness: selected === "dashboard" ? "2.5px" : "auto",
            }}
          >
            Dashboard
          </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
              color: selected === "predictions" ? "inherit" : palette.grey[700],
              fontSize: "16px",
              textDecoration: selected === "predictions" ? "underline" : "inherit",
              textDecorationThickness: selected === "predictions" ? "2.5px" : "auto",
            }}
          >
            Predictions
          </Link>
        </Box>
      </FlexBetween>
    </FlexBetween>
  )
}

export default NavBar