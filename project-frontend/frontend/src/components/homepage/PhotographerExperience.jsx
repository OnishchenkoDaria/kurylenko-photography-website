import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/PhotographerExperience.css'; // Підключаємо стилі для компонента

const PhotographerExperience = () => {
    return (
        <div className="photographer-experience">
            <div className="experience-content">
                <h2 className="section-title">Мій досвід</h2>
                <p className="experience-text">
                    Привіт, я - професійний фотограф із більш ніж двадцятирічним досвідом. Моя мета завжди
                    була захопити найцінніші моменти та перетворити їх на витвори мистецтва, які збережуться
                    назавжди. Моя робота - це не просто фотографії; це історії, емоції та краса, виражені через
                    об'єктив моєї камери.
                </p>
                <p className="experience-text">
                    Моя творчість охоплює різноманітні напрямки, від портретів та весіль до природи та міста.
                    Завдяки великому досвіду я вмію вибрати найкращий ракурс, використовуючи світло та колір, щоб
                    створити унікальні зображення, які відзначаються стилістикою та глибиною.
                </p>
                <p className="experience-text">
                    Моя мета - не лише зробити гарне фото, але й передати почуття та атмосферу кожного моменту. Я
                    вірю, що кожне зображення повинно розповідати свою історію, а мої фотографії - це живі карти,
                    які запам'ятовуються назавжди.
                </p>
                <div className="additional-info">
                    <p className="info-text">
                        Проведено більше 500 сесій з різних жанрів фотографії.
                    </p>
                    <p className="info-text">
                        Нагороджений численними визнаннями та призами в галузі фотоіскусства.
                    </p>
                    <p className="info-text">
                        Регулярний учасник виставок та фотоконкурсів на місцевому та міжнародному рівні.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PhotographerExperience;