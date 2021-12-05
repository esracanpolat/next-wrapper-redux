import React from 'react';
import { useFormik } from 'formik';
import styles from '../../styles/Home.module.css'
import { saveData } from '../../components/store/action';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';

const index = () => {
    const dispatch = useDispatch();
    const { InsertData } = useSelector(state => state);

    const router = useRouter();
    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            instgram: '',
            country: '',
            radio: '',
            radioCheck: '',
            measure: '',
            about: ''
        },
        onSubmit: values => {
            console.log(values);
            dispatch(saveData(values));
        }
    });
    console.log(InsertData);
    return (
        <div className="grid-rows-none">
            <div className="bg-black h-16 flex justify-center items-center">
                <p style={{ color: "white", fontSize: 40, fontFamily: "inherit" }}>Yolculuğa Başla</p>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-120">
                    <p className={styles.stepTitle}>Adım 1</p>
                    <p className={styles.subStepTitle}>Kişisel Bilgiler</p>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="isim"
                                    className={styles.input}
                                    onChange={handleChange}
                                    values={values.firstName}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="telefon"
                                    className={styles.input}
                                    onChange={handleChange}
                                    values={values.phone}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="E-posta"
                                    className={styles.input}
                                    onChange={handleChange}
                                    values={values.email}
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="instgram"
                                    placeholder="İnstagram"
                                    className={styles.input}
                                    onChange={handleChange}
                                    values={values.instgram}
                                />
                            </div>
                        </div>
                        <div>
                            <p className={styles.subStepTitle}>Hangi Ülkede Yaşıyorsun?</p>
                            <div>
                                <select name="country" onChange={handleChange} className={styles.input}
                                    className={styles.select}
                                    values={values.country}>
                                    <option value="turkey">Türkiye</option>
                                    <option value="usa">USA</option>
                                    <option value="germany">Germany</option>
                                    <option value="Algeria">algeria</option>
                                </select>
                            </div>
                        </div>
                        <div>
                            <p className={styles.subStepTitle}>  Harbilife ürünü kullandınız mı?</p>
                            <div >
                                <label>
                                    <input type="radio" name="email" className="radio" value="true" onChange={handleChange}
                                        className={styles.input} values={values.radio} />Evet</label>
                                <label>
                                    <input type="radio" name="email" className="radio" value="false" onChange={handleChange}
                                        className={styles.input} values={values.radio} />Hayır</label>
                            </div>
                        </div>
                        <div>
                            <p className={styles.subStepTitle}> Harbilife ürünü kullandınız mı?</p>
                            <div>
                                <label>
                                    <input type="radio" name="email" className="form-radio" value="true" name="radioCheck" onChange={handleChange}
                                        className={styles.input} values={values.radioCheck} />Evet</label>
                                <label>
                                    <input type="radio" name="email" className="form-radio" value="false" name="radioCheck" onChange={handleChange}
                                        className={styles.input} values={values.radioCheck} />Hayır</label>
                            </div>
                        </div>
                        <div>
                            <p className={styles.subStepTitle}> İdeal vücut ölçün nedir?</p>
                            <div>
                                <input
                                    type="text"
                                    name="measure"
                                    placeholder="ideal vücut ölçünüzü yazınız..."
                                    className={styles.input}
                                    onChange={handleChange}
                                    values={values.measure}
                                />
                            </div>
                        </div>
                        <div>
                            <p className={styles.subStepTitle}>Bize biraz kendinden bahsedebilirmisin?</p>
                            <textarea
                                type="textarea"
                                name="about"
                                placeholder="Kendinizden bahsedermisiniz..."
                                className={styles.inputTextArea}
                                onChange={handleChange}
                                values={values.about}
                            />
                        </div>
                        <div style={{ marginBottom: 100 }}>
                            <button className={styles.submitButton} type="submit">Gönder</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default index;
