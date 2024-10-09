import { useContext } from "react";
import { getAuth } from "firebase/auth";
import { Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ProfileMidBody from "../components/ProfileMidBody";
import ProfileSideBar from "../components/ProfileSideBar";
import { AuthContext } from "../components/Authprovider"

export default function ProfilePage() {
    const auth = getAuth();
    const { currentUser } = useContext(AuthContext);
    const navigate = useNavigate();

    if (!currentUser) {
        navigate("/login");
    }

    const handleLogout = () => {
        auth.signOut();
    }
    return (
        <>
            <Container>
                <Row>
                    <ProfileSideBar handleLogout={handleLogout} />
                    <ProfileMidBody />
                </Row>
            </Container>
        </>
    );
}