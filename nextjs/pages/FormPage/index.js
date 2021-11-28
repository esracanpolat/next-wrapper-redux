import React from 'react';
import { useFormik } from 'formik';
import styles from '../../styles/Home.module.css'
import { saveData } from '../../components/store/action';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';

const index = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
        },
        onSubmit: values => {
            console.log(values);
            dispatch(saveData(values));
            router.push("/FormPageStepTwo")
        }
    });
    const { InsertData } = useSelector(state => state);
    console.log(InsertData, "data");
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
                                    placeholder="Ad"
                                    className={styles.input}
                                    onChange={handleChange}
                                    values={values.firstName}
                                />
                                {errors.firstName ? errors.firstName : null}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Soyad"
                                    className={styles.input}
                                    onChange={handleChange}
                                    values={values.lastName}
                                />
                                {errors.lastName ? errors.lastName : null}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="Email"
                                    className={styles.input}
                                    onChange={handleChange}
                                    values={values.email}
                                />
                                {errors.email ? errors.email : null}
                            </div>
                            <div>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="E-mail"
                                    className={styles.input}
                                    onChange={handleChange}
                                    values={values.email}
                                />
                                {errors.email ? errors.email : null}
                            </div>
                        </div>
                        <div>
                            <p className={styles.subStepTitle}>Hangi Ülkede Yaşıyorsun?</p>
                            <div>
                                <select name="country" onChange={handleChange}
                                    values={values.email} id="cars">
                                    <option value="turkey">Türkiye</option>
                                    <option value="usa">USA</option>
                                    <option value="germany">Germany</option>
                                    <option value="Algeria">algeria</option>
                                </select>
                                {errors.email ? errors.email : null}
                            </div>
                        </div>
                        <div>
                            <p className={styles.subStepTitle}>  Harbilife ürünü kullandınız mı?</p>
                            <div>
                                <input
                                    type="text"
                                    name="email"
                                    className={styles.input}
                                    placeholder="E-mail"
                                    onChange={handleChange}
                                    values={values.email}
                                />
                                {errors.email ? errors.email : null}
                            </div>
                        </div>
                        <div>
                            <p className={styles.subStepTitle}>  Harbilife ürünü kullandınız mı?</p>
                            <div>
                                <input
                                    type="text"
                                    name="email"
                                    placeholder="E-mail"
                                    className={styles.input}
                                    onChange={handleChange}
                                    values={values.email}
                                />
                                {errors.email ? errors.email : null}
                            </div>
                        </div>
                        <div>
                            <p className={styles.subStepTitle}> Harbilife ürünü kullandınız mı?</p>
                            <div>
                                <label>
                                    <input type="checkbox" name="email" class="form-radio" value="1" name="fooby[1][]" onChange={handleChange}
                                        values={values.email} />Kiwi</label>
                                <label>
                                    <input type="checkbox" name="email" class="form-radio" value="1" name="fooby[1][]" onChange={handleChange}
                                        values={values.email} />Jackfruit</label>

                                {errors.email ? errors.email : null}
                            </div>
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
