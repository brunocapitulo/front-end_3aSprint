import { useNavigate } from 'react-router-dom'
import banner from '../assets/banner.jpg'
import './Home.css';

export default function Home(){

    const goToPage = useNavigate()

    return (
        <div className="content-product">
            {/* Cabeçalho */}
            <header>
                <div className="user">
                    <span>Compras Online</span>
                </div>
            </header>

            <section className="banner">
                <img src={banner} alt="Banner" />
            </section>

            <section className="main-products">
            <div className = "text-intro">
                    <button className="more-info" onClick={() => goToPage('/products')} style={{ fontSize: '25px', padding: '10px 20px'}}>Entre</button>

                    <button className="more-info" onClick={() => goToPage('/cadastro')} style={{ fontSize: '25px', padding: '10px 20px'}}>Cadastre-se</button>
                </div>
                <p>Produtos em destaque:</p>
                <ul>
                    <li>Acessórios</li>
                    <li>Casacos e Jaquetas</li>
                    <li>Eletrônicos</li>
                </ul>
            </section>

            <footer>
                <div className = "text-intro">
                    <p>Confira também:</p>
                    <p>Anuncie seus produtos</p>
                    <p>Informações sobre a loja</p>
                    <button className="more-info" onClick={() => goToPage('/opiniao')} style={{ fontSize: '25px', padding: '10px 20px', marginLeft: '10px' }}>Entre em contato</button>
                </div>
            </footer>
        </div>
    )
}
