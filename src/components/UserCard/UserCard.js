import { Card, Button } from "react-bootstrap"
import styles from "./user-card.module.css"
import { FaSquareInstagram, FaFacebook, FaTwitter } from "react-icons/fa6"


export default function UserCard() {



    return (

        <Card className={styles.card_component}>
            <div className={styles.card_img}>
            </div>
            <Card.Img src="/Statics/Images/nkar4.jpeg" alt="profile_image" className={styles.profile_img} />
            <Card.Body className="text-center mt-5 d-flex flex-column" style={{ width: "250px" }}>
                <Card.Title > John Smith </Card.Title>
                <Card.Subtitle> Developer
                    <div className="border-top mt-3 mb-3 border-3"></div>
                </Card.Subtitle>
                <Card.Text>
                    I choose product design because i love solving cisual problems with UI/UX
                </Card.Text>
                <Card.Footer className={styles.footer_bg}>
                    <Button>
                        <FaSquareInstagram />
                    </Button>
                    <Button>
                        <FaFacebook />
                    </Button>
                    <Button>
                        <FaTwitter />
                    </Button>
                </Card.Footer>
            </Card.Body>
        </Card>


    )
}