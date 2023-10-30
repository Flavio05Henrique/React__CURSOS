import style from "./banner.module.css"
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/eu__small.jpg'

export default function Banner() {
    return(
        <div className={style.banner}>
            <div className={style.apresentacao}>
                <h1 className={style.titulo}>
                    Ola, Mundo!
                </h1>
                <p className={style.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Flavio Henrique, estudante de programção. Aqui compartilho vários conhecimentos, espero que aprenda algo novo.
                </p>
            </div>
            <div className={style.imagens}>
                <img 
                    className={style.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />
                <img 
                    className={style.minhaFoto}
                    src={minhaFoto} 
                    alt="Foto do flavio henrique"
                />
            </div>

        </div>
    )
}