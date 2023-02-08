import React from 'react';
import './cookies.css';

import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

const Cookies = () => {
    return (
        <div className='bg__general_aux_cookies'>
            <div className='bg__general_cookies'>
                <div className='bg__icon'>
                    <a href='http://localhost:3000'><KeyboardBackspaceIcon className='goBack_icon' /></a>
                </div>
                <div className='bg__content_cookies'>
                    <h1>Cookies</h1>
                    <ul>
                        <li>Definición y función de las cookies
                            <p>
                                ¿Qué son las cookies? Una cookie es un fichero que se descarga
                                y ejecuta en su ordenador, teléfono o dispositivo móvil al
                                acceder a determinadas páginas web. Las cookies permiten a una
                                página web, entre otras cosas, almacenar y recuperar información
                                sobre los hábitos de navegación de un usuario o de su equipo y,
                                dependiendo de la información que contengan y de la forma en que
                                utilice su equipo, pueden utilizarse para reconocer al usuario.<br /><br />

                                Las cookies no dañan el equipo y son necesarias para facilitar la navegación.<br /><br />
                            </p>
                        </li>

                        <li>Para qué sirven las cookies en nuestro sitio web
                            <p>
                                Las cookies son una parte esencial del funcionamiento de nuestro
                                sitio web. La finalidad de nuestras cookies es la mejora de la
                                experiencia en la navegación de los usuarios. Pueden utilizarse
                                para recordar sus preferencias (idioma, país, etc.) durante la
                                navegación y en futuras visitas. La información recogida en las
                                cookies también nos permite mejorar la web y adaptarla a los
                                intereses individuales de los usuarios, la aceleración de las
                                búsquedas, etc.<br /><br />

                                En ocasiones, previa obtención de su consentimiento informado,
                                podremos utilizar cookies para obtener información que nos
                                permita mostrarle desde nuestro sitio web, las de terceros,
                                o cualquier otro medio o publicidad basada en el análisis de
                                sus hábitos de navegación.<br /><br />
                            </p>
                        </li>

                        <li>Qué tipos de cookies utiliza nuestra web<br /><br />
                            <ul className='cookies__sublist'>
                                <li>
                                    Cookies de análisis. Son aquéllas que, bien tratadas por nosotros
                                    o por terceros, nos permiten cuantificar el número de usuarios y
                                    así realizar la medición y análisis estadístico de la utilización
                                    que hacen los usuarios del servicio ofertado. Para ello se analiza
                                    su navegación en nuestra página web con el fin de mejorar la oferta
                                    de productos o servicios que le ofrecemos.
                                </li>
                                <li>
                                    Cookies publicitarias. Son aquéllas que, bien tratadas por nosotros
                                    o por terceros, nos permiten gestionar de la forma más eficaz posible
                                    la oferta de los espacios publicitarios que hay en la página web,
                                    adecuando el contenido del anuncio al contenido del servicio solicitado
                                    o al uso que realice de nuestra página web. Para ello podemos analizar
                                    sus hábitos de navegación en Internet y podemos mostrarle publicidad
                                    relacionada con su perfil de navegación.<br /><br /><br />
                                </li>
                            </ul>
                        </li>

                        <li>Para qué NO utilizaremos las cookies
                            <p>
                                Nuestras cookies no almacenan información sobre su identificación personal,
                                dirección, contraseña, los datos de su tarjeta de crédito o débito, etc.<br /><br />
                            </p>
                        </li>

                        <li>Quien utiliza la información contenida en las cookies
                            <p>
                                La información almacenada en las Cookies de nuestro sitio web es utilizada
                                exclusivamente por nosotros, a excepción de aquellas identificadas más
                                adelante como “Cookies de terceros”, que son utilizadas y gestionadas por
                                entidades externas para proporcionarnos servicios solicitados por nosotros
                                para mejorar nuestros servicios y la experiencia del usuario al navegar en
                                nuestro sitio web. Los principales servicios para los que se utilizan estas
                                “Cookies de terceros” son la obtención de estadísticas de accesos y garantizar
                                las operaciones de pago realizadas.<br /><br />
                            </p>
                        </li>

                        <li>¿Puedo evitar el uso de cookies de este sitio web?
                            <p>
                                Sí. En primer lugar, debe deshabilitar en su navegador el uso de Cookies y,
                                en segundo lugar, eliminar las Cookies guardadas en su navegador asociadas
                                a este sitio web.<br /><br />

                                Puede restringir, bloquear o borrar las Cookies de este sitio web, en cualquier
                                momento, modificando la configuración de su navegador. Esta parametrización es
                                diferente para cada navegador. Para más detalle sobre la configuración de las
                                Cookies en su navegador, consulte el menú "Ayuda" del mismo.<br /><br />

                                Es posible que algunas funcionalidades de la web dejen de funcionar al
                                deshabilitar el uso de las cookies.<br /><br />
                            </p>
                        </li>

                        <li>Cookies que utiliza nuestra web y su finalidad
                            <p>
                                A continuación, una relación de las distintas cookies utilizadas en la web.<br /><br />

                                <ul>
                                    <li>
                                        <h4 className='cookies__title'>
                                            Cookies técnicas y de personalización: de identificación y
                                            autenticación, de navegación, de personalización de la interfaz,
                                            de favoritos…
                                        </h4>

                                        <p>
                                            Estas Cookies se utilizan para identificar al usuario durante la sesión, evitar que el usuario tenga que repetir procesos de autenticación en la web, acelerar algunos procesos del sitio web, recordar selecciones realizadas durante la sesión o en posteriores accesos, recordar las páginas ya visitadas, etc.
                                        </p>

                                        <table className='cookies__table'>
                                            <tr className='cookies__table_title_container'>
                                                <th className='cookies__table_title'>COOKIES</th>
                                                <th className='cookies__table_title'>FINALIDAD</th>
                                                <th className='cookies__table_title'>DURACIÓN</th>
                                                <th className='cookies__table_title'>GESTIÓN</th>
                                            </tr>
                                            <tr>
                                                <td>Identificación del usuario</td>
                                                <td>Permite identificar de forma única el dispositivo (PC, teléfono, etc.) desde el que se realizan las compras en este sitio web para su posterior análisis, con el fin de poder ofrecer a nuestros clientes las garantías suficientes en las operaciones de compra. La información contenida en esta cookie es recogida por una empresa externa para realizar dichos análisis.</td>
                                                <td>Sesión</td>
                                                <td>Propias</td>
                                            </tr>
                                            <tr>
                                                <td>Identificación de la sesión</td>
                                                <td>Identifican la sesión http del usuario. Son comunes en todas las aplicaciones web para identificar peticiones de un usuario en una sesión.</td>
                                                <td>Sesión</td>
                                                <td>Propias</td>
                                            </tr>
                                            <tr>
                                                <td>Estado de la navegación</td>
                                                <td>Permiten identificar en qué estado de navegación se encuentra el usuario (inicio de la sesión, primera página, primer acceso, estado de un scroll, estado de una votación, etc.).</td>
                                                <td>Sesión</td>
                                                <td>Propias</td>
                                            </tr>
                                            <tr>
                                                <td>Selecciones del usuario</td>
                                                <td>Almacenan los valores de sesión seleccionados por el usuario tales como la tienda, el idioma, la moneda, los productos, la talla, etc.</td>
                                                <td>Sesión</td>
                                                <td>Propias</td>
                                            </tr>
                                            <tr>
                                                <td>Favoritos y últimas selecciones</td>
                                                <td>Permiten recordar las selecciones favoritas del usuario (de tiendas, por ejemplo) o las últimas selecciones (de tiendas, productos, consentimiento para la instalación de cookies, etc.) en posteriores accesos a la web.</td>
                                                <td>Sesión</td>
                                                <td>Propias</td>
                                            </tr>
                                            <tr>
                                                <td>Cesta de la Compra</td>
                                                <td>Almacenan información sobre la cesta de la compra, así como los datos de identificación de usuario asociados a dicha cesta.</td>
                                                <td>Sesión</td>
                                                <td>Propias</td>
                                            </tr>
                                            <tr>
                                                <td>Protocolos</td>
                                                <td>Permiten gestionar cambios entre dominio (protocolo) seguro (https) y no seguro (http).</td>
                                                <td>Sesión</td>
                                                <td>Propias</td>
                                            </tr>
                                        </table>
                                    </li>

                                    <li>
                                        <h4 className='cookies__title'>Cookies de análisis de compras</h4>
                                        
                                        <p>
                                            Estas Cookies permiten recopilar información sobre el dispositivo desde el que se realiza la
                                            compra en este sitio web, con el propósito de verificar que dichas operaciones ofrecen las
                                            garantías suficientes para los clientes. Estas Cookies en ningún momento incluyen información
                                            sensible, como pueden ser los datos de tarjetas.
                                        </p>

                                        <table className='cookies__table'>
                                            <tr className='cookies__table_title_container'>
                                                <th className='cookies__table_title'>COOKIES</th>
                                                <th className='cookies__table_title'>FINALIDAD</th>
                                                <th className='cookies__table_title'>DURACIÓN</th>
                                                <th className='cookies__table_title'>GESTIÓN</th>
                                            </tr>
                                            <tr>
                                                <td>Dispositivo de Compra (thx_guid)</td>
                                                <td>Se utilizan para identificar y autenticar al usuario. Contienen además datos técnicos de la sesión de usuario como, por ejemplo, tiempo de espera de conexión, identificador de sesión, etc</td>
                                                <td>Persistente</td>
                                                <td>De terceros</td>
                                            </tr>
                                        </table>
                                    </li>

                                    <li>
                                        <h4 className='cookies__title'>Cookies de análisis de navegación</h4>
                                        
                                        <p>
                                            Estas Cookies obtienen información genérica sobre los accesos de los usuarios al sitio
                                            web (no al contenido del mismo) para proporcionarnos posteriormente información agregada
                                            de dichos accesos con fines estadísticos. 
                                        </p>

                                        <table className='cookies__table latest__table'>
                                            <tr className='cookies__table_title_container'>
                                                <th className='cookies__table_title'>COOKIES</th>
                                                <th className='cookies__table_title'>FINALIDAD</th>
                                                <th className='cookies__table_title'>DURACIÓN</th>
                                                <th className='cookies__table_title'>GESTIÓN</th>
                                            </tr>
                                            <tr>
                                                <td>Procedencia (WC_GASource)</td>
                                                <td>Se utilizan para conocer la procedencia de un usuario al llegar a una página de este sitio web, por ejemplo, si llega a la página de detalle de producto desde una parrilla de productos, desde el buscador o desde una página externa.</td>
                                                <td>Persistente</td>
                                                <td>Propias</td>
                                            </tr>
                                            <tr>
                                                <td>Google Analytics(__utma, __utmb, __utmc, __utmd, __utmv, __utmz, _ga...)</td>
                                                <td>Permiten realizar el seguimiento del sitio web mediante la herramienta Google Analytics, que es un servicio proporcionado por Google para obtener información de los accesos de los usuarios a los sitios web. Alguno de los datos guardados para análisis posteriores son: número de veces que un usuario visita la web, fechas de la primera y última visita del usuario, duración de las visitas, desde qué página accedió el usuario a la web, qué motor de búsqueda utilizó el usuario para llegar a la web o en qué enlace hizo click, desde qué lugar del mundo accedió el usuario, etc. La información que genera la “cookie” acerca de su uso del website será directamente transmitida y archivada por Google Inc (empresa con sede en EEUU). La configuración de estas cookies está predeterminada por el servicio ofrecido por Google, por lo que le sugerimos que consulte la página de privacidad de Google Analytics, https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage, para obtener más información de las cookies que utiliza y de cómo inhabilitarlas (teniendo en consideración que no somos responsables del contenido ni la veracidad de los sitios web de terceros).</td>
                                                <td>Persistente</td>
                                                <td>De terceros</td>
                                            </tr>
                                            <tr>
                                                <td>Optimizely (optimizelySegments; optimizelyEndUserId optimizelyPendingLogEvents; optimizelyBuckets...)</td>
                                                <td>Las cookies identificadas con el dominio optimizely.com o www.optimizely.com, nos permiten optimizar el aspecto, las sensaciones, los mensajes y, en general, su finalidad es la de asegurar que el usuario obtiene una experiencia de navegación consistente en nuestro Sitio Web, basándonos en cómo lo utilizan nuestros usuarios. Alguno de los datos guardados para análisis posteriores son: el número de actualizaciones de la página que ha visto el usuario, información por segmentos de visitantes, tales como el navegador, campaña, tipo de fuentes móviles, y todos los segmentos personalizados definidos, etc.La configuración de estas cookies está predeterminada por el servicio ofrecido por nuestro proveedor Optimizely, Inc, (empresa con sede en EEUU), por lo que le sugerimos que consulte su página web https://help.optimizely.com/hc/en-us/articles/200040335. Para obtener más información de las cookies que utiliza y de cómo inhabilitarlas, consulte el siguiente link,https://www.optimizely.com/opt_out. Por favor, tenga en consideración que no somos responsables del contenido ni la veracidad de los sitios web de terceros.</td>
                                                <td>Persistente</td>
                                                <td>De terceros</td>
                                            </tr>
                                        </table>
                                    </li>
                                </ul>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cookies;