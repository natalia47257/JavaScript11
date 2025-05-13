import { useState } from 'react';

const Form = () => {
    // Состояния для полей и ошибок
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    // Валидация при отправке
    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Проверка email
        if (!email.includes('@')) {
            newErrors.email = 'Некорректный email';
        }

        // Проверка пароля
        if (password.length < 8) {
            newErrors.password = 'Пароль должен быть не короче 8 символов';
        }

        // Обновляем ошибки
        setErrors(newErrors);

        // Если ошибок нет - отправляем данные
        if (Object.keys(newErrors).length === 0) {
            console.log('Данные отправлены:', { email, password });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Поле Email */}
            <div>
                <label>Email:</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>

            {/* Поле Password */}
            <div>
                <label>Пароль:</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <span className="error">{errors.password}</span>}
            </div>

            <button type="submit">Отправить</button>
        </form>
    );
};
export default Form;