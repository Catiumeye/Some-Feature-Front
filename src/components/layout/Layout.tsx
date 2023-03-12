import { Col, Container, Nav, Navbar, Row } from "react-bootstrap"
import { Link, Outlet } from "react-router-dom"

export const Layout = () => {


    return(
    <>
        <header className="AppHeader bg-dark">
            <Container>
                <Navbar>
                    <Navbar.Brand className="fw-bold fs-3 text-light px-5">
                        Catium
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav">
                        ntoggle
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav.Link><Link className="text-decoration-none text-light px-2" to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link className="text-decoration-none text-light px-2" to='posts'>Posts</Link></Nav.Link>
                        <Nav.Link><Link className="text-decoration-none text-light px-2" to='signup'>Sign up</Link></Nav.Link>
                        <Nav.Link><Link className="text-decoration-none text-light px-2" to='signin'>Sign in</Link></Nav.Link>
                        <Nav.Link><Link className="text-decoration-none text-light px-2" to='profile/1'>Profile</Link></Nav.Link>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>

        <Container>
            <Row className="mt-3 my-4 vh-100">
                <Col md={8}>
                    <main className="bg-dark vh-100 py-3 px-3 text-light">
                        <Outlet />
                    </main>
                </Col>
                <Col md={4} className="">
                    <aside className="vh-100 flex-shrink-0 bg-dark text-wrap text-nowrap bd-highlight text-light px-2 py-2">
                        Тут обязательно что-то будет
                    </aside>
                </Col>
            </Row>
        </Container>

        <footer className="bg-dark">
            <Container>
                <Row className="text-light py-3 px-3 fw-bold mx-auto text-center">
                    <Col>
                        "ООО Писькосрой" копирайт (c)2023. 
                    </Col>
                    <Col>
                        Наш адрес: Улица генерала Жмышенко дом 54.
                    </Col>
                </Row>
            </Container>
        </footer>
    </>
    )
}