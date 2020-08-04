import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://instagram.fsod2-1.fna.fbcdn.net/v/t51.2885-19/s150x150/101790961_1158485497839226_4769051524208787456_n.jpg?_nc_ht=instagram.fsod2-1.fna.fbcdn.net&_nc_ohc=22hximV3k8AAX_7tDRx&oh=f3eee5395420eab6c5db4ecba084e6b7&oe=5F50F090" alt="Flavian" />
        <div>
          <strong>Flavian Melquiades</strong>
          <span>Robótica</span>
        </div>
      </header>
      <p>
        Robô Robô Robô
            <br /> <br />
            Troféu Troféu Troféu
          </p>
      <footer>
        <p>
          Preço/Hora:
              <strong>R$ 100,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Contato" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
}

export default TeacherItem;