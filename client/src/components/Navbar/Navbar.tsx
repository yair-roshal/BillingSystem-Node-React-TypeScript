import {styled} from "@mui/material/styles"
import {AppBar, Toolbar} from "@mui/material"
import {Link} from "react-router-dom"
import Button from "@mui/material/Button"

const StyledLink = styled(Button)({ 
    color: "white",
    fontSize: "20px",
    marginLeft: "30px",
    "&:hover": {
        color: "yellow",
        cursor: "pointer",
    },
})

export function Navbar() {
    return (<AppBar position="static" >
        <Toolbar >
            <Link to="/create-client" style={{ textDecoration: 'none' }}>
                <StyledLink variant="contained"    >
                    Main
                </StyledLink>
            </Link>
            <Link to="/client-list" style={{ textDecoration: 'none' }}>
                <StyledLink variant="contained"    >
                    Client List
                </StyledLink>
            </Link>
        </Toolbar>
    </AppBar>
    )
}


