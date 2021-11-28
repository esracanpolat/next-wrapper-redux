import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import styles from '../../styles/Home.module.css'

const index = () => {
    const dispatch = useDispatch();

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            about: '',
        },
        onSubmit: values => {
            console.log(values);
            dispatch(saveData(values));
        }
    });
    return (
        <div className="grid-rows-none" style={{ height: "65vh" }}>
            <div className="bg-black h-16 flex justify-center items-center">
                <p style={{ color: "white", fontSize: 40, fontFamily: "inherit" }}>Yolculuğa Başla</p>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-120">
                    <p className={styles.stepTitle}>Adım 2</p>
                    <p className={styles.subStepTitle}>Bize biraz kendinden bahsedebilirmisin?</p>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-2 gap-4 mt-4">
                            <div>
                                <textarea
                                    type="textarea"
                                    name="about"
                                    placeholder="Kendinizden bahsedermisiniz..."
                                    className={styles.inputTextArea}
                                    onChange={handleChange}
                                    values={values.firstName}
                                />
                                {errors.firstName ? errors.firstName : null}
                            </div>
                        </div>
                        <div style={{ marginTop: 10 }}>
                            <button className={styles.submitButton} type="submit">Gönder</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default index;
