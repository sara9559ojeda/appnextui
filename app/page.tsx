
import { main } from "framer-motion/client";
import { Navbar, Input, Slider, Card, CardHeader, CardBody, Image, DateRangePicker, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="bg-purple-200">
      <nav className="bg-purple-200 pt-3">
        <Navbar position="static" className="bg-purple-200  ">
          <NavbarBrand>
            <p className="font-bold text-inherit">Hola, bienvenido</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4 bg-purple-400 p-5 rounded-lg" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                Nueva encuesta
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link href="#" aria-current="page">
                Editar encuesta
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Crear encuesta
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Link href="#">Iniciar sesión</Link>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} color="primary" href="#" variant="flat">
                Crear cuenta
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </nav>
      <section className="p-10 ">
        <br />
        <p className="text-center text-3xl font-bold uppercase">Responde las siguientes preguntas</p>
        <br />
        <section className="grid grid-cols-2">
          <div className="p-4">
            <p>Ingresa tu nombre completo</p>
            <div className="flex flex-wrap md:flex-nowrap gap-2 ">
              <Input type="email" label="Name" placeholder="Enter your Name" />
            </div>

            <p>¿Cuál es tu fecha de nacimiento?</p>
            <DateRangePicker
              label="Birthdate"
              className="max-w-xs"
            />
            <br />
            <Button
              disableRipple
              className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
              size="lg"
            >
              Guardar datos
            </Button>
          </div>
          <div className="p-4">
            <Slider
              label="Genero"
              startContent="Hombre"
              endContent="Mujer"
              size="sm"
              color="warning"
              defaultValue={50}
              className=" pb-5 pt-4 max-w-md"
            />
            <p> Ingrese su email</p>
            <Input className="flex w-full flex-wrap md:flex-nowrap gap-4" type="email" label="Email" placeholder="Enter your email" />
          </div>
          
        </section>
        <section className="p-4">
          <p>¿Qué tan satisfecho está con esta empresa?</p>
          <Input type="email" label="Reseña" placeholder="Escriba una breve reseña" />
          <p>¿Cuál ha sido tu experiencia más gratificante en esta empresa?</p>
          <Input type="email" label="Experiencia" placeholder="Escrba su experiencia" />
          <Button
              disableRipple
              className="p-4 relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
              size="lg"
            >
              Guardar datos
            </Button>

        </section>
        <br />
        <p className="p-4">Contacta a nuestros asesores</p>
        <footer className="grid grid-cols-4 p-4 gap-x-4">
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Maria Riascos</p>
              <small className="text-default-500">Asesora profesional</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="https://nextui.org/images/hero-card-complete.jpeg"
                width={270}
              />
            </CardBody>
          </Card>
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Julian Bastidas</p>
              <small className="text-default-500">Asesor profesional</small>
            
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="data:image/jpeg;base64,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"
                width={270}
              />
            </CardBody>
          </Card>
          <Card className="py-4">
            <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
              <p className="text-tiny uppercase font-bold">Mauricio Perez</p>
              <small className="text-default-500">Asesor profesional</small>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
              <Image
                alt="Card background"
                className="object-cover rounded-xl"
                src="data:image/jpeg;base64,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"
                width={270}
              />
            </CardBody>
          </Card>
        </footer>
      </section>



    </main>


  );
}
