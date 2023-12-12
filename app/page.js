"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
        className="top-24 relative shadow-md rounded-xl max-w-xl lg:mx-auto mx-4 lg:max-w-xl max-2xl md:mx-auto sm:mx-auto lg:px-0"
        style={{
          backgroundImage: 'url("/img/bg1.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.img
          initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
          animate={{
            x: 0,
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 0.4, delay: 0.5 },
          }}
          className="w-full h-full flex object-cover   rounded-full "
          src="/img/1.png"
          alt=""
        />
        <div className="lg:mx-auto">
          <div className=" lg:p-6 p-3">
            <motion.img
              initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
              animate={{
                x: 0,
                opacity: 1,
                filter: "blur(0px)",
                transition: { duration: 0.4, delay: 0.5 },
              }}
              className="w-72 h-82 h-72 flex object-cover mx-auto"
              src="/img/chela50.png"
              alt=""
            />

            <div className="  flex-col md:flex-row   my-16 flex items-center md:justify-between">
              <div className=" sm:order-2   max-md:mt-10 flex md:block md:flex-row items-center  flex-col md:order-1 order-2">
                <h1 className="text-6xl font-custom text-center">
                  Festejemos Juntos
                </h1>

                <motion.p
                  initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.2, delay: 0.3 },
                  }}
                  className="  text-lg max-md:text-center  my-3 text-neutral-500 dark:text-neutral-300"
                >
                  La mayor alegría para mí sería tenerte a mi lado compartiendo
                  este día tan especial.
                </motion.p>

                <motion.img
                  initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.4, delay: 0.5 },
                  }}
                  className="w-full h-full flex object-cover   rounded-full "
                  src="/img/2.png"
                  alt=""
                />

                <div>
                  <h2 className=" text-4xl text-center dark:text-white text-[#353849] font-custom ">
                    16 de Diciembre
                  </h2>
                  <h4 className=" text-2xl text-center dark:text-white text-[#353849] font-custom ">
                    21:30 hs
                  </h4>
                  <h2 className=" text-4xl text-center dark:text-white text-[#353849] font-custom ">
                    Hotel Asturias - Cafayate
                  </h2>
                  <p className="text-center dark:text-neutral-300 text-[#666D80] text-lg">
                    Ingreso por calle Miguel Hurtado
                  </p>
                </div>

                <div className="flex justify-center gap-x-2 my-6 mx-auto">
                  <Link
                    href={
                      "https://api.whatsapp.com/send/?phone=%2B5403868411475&text=Hola,+confirmo+mi+asistencia+al+cumpleaños+de+Chela&type=phone_number&app_absent=0"
                    }
                  >
                    <div className="bg-[#ecdf2a] h-6 w-100 w-fit px-3 py-6 rounded-full flex items-center justify-center gap-x-2">
                      <div className="w-2 h-2 rounded-full animate-ping dark:animate-none bg-[#28C780]" />
                      <p className="text-[#000000] lg:inline font-bold">
                        Confirmar asistencia
                      </p>
                    </div>
                  </Link>

                  <Link href={"https://goo.gl/maps/prMzo2Dgx7EaeUj98"}>
                    <div className="bg-[#ecdf2a] h-6 w-100 w-fit px-3 py-6 rounded-full flex items-center justify-center gap-x-2">
                      <div className="w-2 h-2 rounded-full animate-ping dark:animate-none bg-[#28C780]" />
                      <p className="text-[#000000] lg:inline font-bold">
                        Ubicación
                      </p>
                    </div>
                  </Link>
                </div>

                <motion.img
                  initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.4, delay: 0.5 },
                  }}
                  className="w-full h-full flex object-cover   rounded-full "
                  src="/img/3.png"
                  alt=""
                />

                <div className="mx-auto max-w-md">
                  <div>
                    <h2 className=" text-6xl text-center font-custom dark:text-white text-[#353849] ">
                      Tu compañía es el regalo más preciado.
                    </h2>
                    <p className="text-center mt-3 dark:text-neutral-300 text-[#666D80] text-lg">
                      Sin embargo, si sientes el deseo de obsequiarme algo y no
                      sabes qué, he creado un enlace de pago donde puedes
                      contribuir con lo que desees. El enlace acepta pagos con
                      tarjeta de débito y crédito.
                    </p>
                  </div>

                  <div className="flex justify-center gap-x-2 my-6 mx-auto">
                    <Link href={"https://link.mercadopago.com.ar/cumplechela"}>
                      <div className="bg-[#ecdf2a] h-6 w-100 w-fit px-3 py-6 rounded-full flex items-center justify-center gap-x-2">
                        <div className="w-2 h-2 rounded-full animate-ping dark:animate-none bg-[#28C780]" />
                        <p className="text-[#000000] flex font-bold ">
                          Contribuir
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>

                <motion.img
                  initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    filter: "blur(0px)",
                    transition: { duration: 0.4, delay: 0.5 },
                  }}
                  className="w-full h-full flex object-cover   rounded-full "
                  src="/img/4.png"
                  alt=""
                />

                <div>
                  <h2 className=" text-6xl text-center dark:text-white text-[#353849]  font-custom">
                    Agradezco de antemano tu amor y amistad. Con aprecio,
                    <motion.img
                      initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                        transition: { duration: 0.4, delay: 0.5 },
                      }}
                      className="w-full h-full flex object-cover"
                      src="/img/5.png"
                      alt=""
                    />
                    <motion.img
                      initial={{ x: 100, opacity: 0, filter: "blur(50px)" }}
                      animate={{
                        x: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                        transition: { duration: 0.4, delay: 0.5 },
                      }}
                      className="w-full h-full flex object-cover"
                      src="/img/6.png"
                      alt=""
                    />
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
