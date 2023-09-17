import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FormControl from 'react-bootstrap/FormControl';
import Dropdown from 'react-bootstrap/Dropdown';
import "./scrollbar.css";
// import Button from 'react-bootstrap/Button';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { AiOutlineCopy } from 'react-icons/ai';
import { BsTranslate } from 'react-icons/bs';



import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Translator = () => {
    const scrollContainerStyle = { width: "200px", maxHeight: "400px" };
    const [inValue, setInValue] = useState("");
    const [outValue, setOutValue] = useState("");

    const [fromLang, setFromLang] = useState("English");
    const [toLang, setToLang] = useState("Hindi");

    const [fromLangCode, setFromLangCode] = useState("en");
    const [toLangCode, setToLangCode] = useState("hi");

    const [copy, setCopy] = useState(false)

    const [voiceIndex, setVoiceIndex] = useState(null)



    function handleInChange(event) {
        setInValue(event.target.value);
    }

   

    function handleFromSelect(eventKey) {
        console.log(eventKey)
        const selectedLang = languages.find((language) => language.code === eventKey);
        setFromLang(selectedLang.name);
        setFromLangCode(selectedLang.code)
    }

    function handleToSelect(eventKey) {
        const selectedLang = languages.find((language) => language.code === eventKey);
        setToLang(selectedLang.name);
        setToLangCode(selectedLang.code)
    }

    function handleTranslation() {
        if (inValue.trim !== "") {
            fetch(`https://api.mymemory.translated.net/get?q=${inValue}&langpair=${fromLangCode}|${toLangCode}`)
                .then((res) => {
                    return res.json()
                })
                .then((finalRes) => {
                    console.log(finalRes.responseData.translatedText)
                    setOutValue(finalRes.responseData.translatedText)
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }

    //copy the text
    const handleFromAltert = () => {
        if (copy && inValue !== "") {
            toast.success('Text Copied Succssfully', { autoClose: 3000, position: toast.POSITION.TOP_CENTER })
        }
        else {
            toast.error("Empty Input Field", { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
        }
    }

    const handleToAlert = () => {
        if (copy &&outValue !== "") {
            toast.success('Text Copied Succssfully', { autoClose: 3000, position: toast.POSITION.TOP_CENTER })
        }
        else {
            toast.error("Empty Input Field", { autoClose: 3000, position: toast.POSITION.TOP_CENTER });
        }





    }

    const languages = [

        { code: "am-ET", name: "Amharic" },
        { code: "ar-SA", name: "Arabic" },
        { code: "be-BY", name: "Bielarus" },
        { code: "bem-ZM", name: "Bemba" },
        { code: "bi-VU", name: "Bislama" },
        { code: "bjs-BB", name: "Bajan" },
        { code: "bn-IN", name: "Bengali" },
        { code: "bo-CN", name: "Tibetan" },
        { code: "br-FR", name: "Breton" },
        { code: "bs-BA", name: "Bosnian" },
        { code: "ca-ES", name: "Catalan" },
        { code: "cop-EG", name: "Coptic" },
        { code: "cs-CZ", name: "Czech" },
        { code: "cy-GB", name: "Welsh" },
        { code: "da-DK", name: "Danish" },
        { code: "dz-BT", name: "Dzongkha" },
        { code: "de-DE", name: "German" },
        { code: "dv-MV", name: "Maldivian" },
        { code: "el-GR", name: "Greek" },
        { code: "en-GB", name: "English" },
        { code: "es-ES", name: "Spanish" },
        { code: "et-EE", name: "Estonian" },
        { code: "eu-ES", name: "Basque" },
        { code: "fa-IR", name: "Persian" },
        { code: "fi-FI", name: "Finnish" },
        { code: "fn-FNG", name: "Fanagalo" },
        { code: "fo-FO", name: "Faroese" },
        { code: "fr-FR", name: "French" },
        { code: "gl-ES", name: "Galician" },
        { code: "gu-IN", name: "Gujarati" },
        { code: "ha-NE", name: "Hausa" },
        { code: "he-IL", name: "Hebrew" },
        { code: "hi-IN", name: "Hindi" },
        { code: "hr-HR", name: "Croatian" },
        { code: "hu-HU", name: "Hungarian" },
        { code: "code-code", name: "Indonesian" },
        { code: "is-IS", name: "Icelandic" },
        { code: "it-IT", name: "Italian" },
        { code: "ja-JP", name: "Japanese" },
        { code: "kk-KZ", name: "Kazakh" },
        { code: "km-KM", name: "Khmer" },
        { code: "kn-IN", name: "Kannada" },
        { code: "ko-KR", name: "Korean" },
        { code: "ku-TR", name: "Kurdish" },
        { code: "ky-KG", name: "Kyrgyz" },
        { code: "la-VA", name: "Latin" },
        { code: "lo-LA", name: "Lao" },
        { code: "lv-LV", name: "Latvian" },
        { code: "men-SL", name: "Mende" },
        { code: "mg-MG", name: "Malagasy" },
        { code: "mi-NZ", name: "Maori" },
        { code: "ms-MY", name: "Malay" },
        { code: "mt-MT", name: "Maltese" },
        { code: "my-MM", name: "Burmese" },
        { code: "ne-NP", name: "Nepali" },
        { code: "niu-NU", name: "Niuean" },
        { code: "nl-NL", name: "Dutch" },
        { code: "no-NO", name: "Norwegian" },
        { code: "ny-MW", name: "Nyanja" },
        { code: "ur-PK", name: "Pakistani" },
        { code: "pau-PW", name: "Palauan" },
        { code: "pa-IN", name: "Panjabi" },
        { code: "ps-PK", name: "Pashto" },
        { code: "pis-SB", name: "Pijin" },
        { code: "pl-PL", name: "Polish" },
        { code: "pt-PT", name: "Portuguese" },
        { code: "rn-BI", name: "Kirundi" },
        { code: "ro-RO", name: "Romanian" },
        { code: "ru-RU", name: "Russian" },
        { code: "sg-CF", name: "Sango" },
        { code: "si-LK", name: "Sinhala" },
        { code: "sk-SK", name: "Slovak" },
        { code: "sm-WS", name: "Samoan" },
        { code: "sn-ZW", name: "Shona" },
        { code: "so-SO", name: "Somali" },
        { code: "sq-AL", name: "Albanian" },
        { code: "sr-RS", name: "Serbian" },
        { code: "sv-SE", name: "Swedish" },
        { code: "sw-SZ", name: "Swahili" },
        { code: "ta-LK", name: "Tamil" },
        { code: "te-IN", name: "Telugu" },
        { code: "tet-TL", name: "Tetum" },
        { code: "tg-TJ", name: "Tajik" },
        { code: "th-TH", name: "Thai" },
        { code: "ti-TI", name: "Tigrinya" },
        { code: "tk-TM", name: "Turkmen" },
        { code: "tl-PH", name: "Tagalog" },
        { code: "tn-BW", name: "Tswana" },
        { code: "to-TO", name: "Tongan" },
        { code: "tr-TR", name: "Turkish" },
        { code: "uk-UA", name: "Ukrainian" },
        { code: "uz-UZ", name: "Uzbek" },
        { code: "vi-VN", name: "Vietnamese" },
        { code: "wo-SN", name: "Wolof" },
        { code: "xh-ZA", name: "Xhosa" },
        { code: "yi-YD", name: "Ycodedish" },
        { code: "zu-ZA", name: "Zulu" },
    ];

    return (
        <>
            <div>
                <Container>
                    <Card className='mt-5 block-example border border-dark'>

                        <Card.Header className="nine">
                            <h1><BsTranslate/> Translator App <BsTranslate/><span>📃📄📑📝</span> </h1>
                        </Card.Header>

                        <Card.Body>
                            <Row >
                                <Col md={6} className='text-center' style={{ padding: "30px" }}>
                                    <h6>Translate From: {fromLang}</h6>
                                    <Dropdown onSelect={handleFromSelect} style={{ padding: "10px" }} >
                                        <Dropdown.Toggle >{fromLang}</Dropdown.Toggle>
                                        <Dropdown.Menu className="scrollbar scrollbar-primary  mx-auto" style={scrollContainerStyle}>
                                            {languages.map((language) => {
                                                return <Dropdown.Item eventKey={language.code} key={language.code}> {language.name}</Dropdown.Item>
                                            }
                                            )}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <FormControl as="textarea"
                                        placeholder='Enter your text' onChange={handleInChange}
                                        value={inValue}
                                    >
                                    </FormControl>


                                    <div className='app'>
                                        <div className="input_group">

                                            {/* Copy the Text */}
                                            <CopyToClipboard text={inValue}
                                                onCopy={() => setCopy(true)} style={{ cursor: "pointer", margin: "10px" }}>

                                                <button className="button-86" onClick={handleFromAltert}>
                                                    <AiOutlineCopy />
                                                </button>

                                            </CopyToClipboard>
                                            <ToastContainer />

                                        </div>
                                    </div>
                                </Col>

                                <Col md={6} className='text-center' style={{ padding: "30px" }}>
                                    <h6>Translate To: {toLang}</h6>
                                    <Dropdown onSelect={handleToSelect} style={{ padding: "10px" }} >
                                        <Dropdown.Toggle >{toLang}</Dropdown.Toggle>
                                        <Dropdown.Menu className="scrollbar scrollbar-primary  mx-auto" style={scrollContainerStyle} value={voiceIndex}>
                                            {languages.map((language) => {
                                                return <Dropdown.Item eventKey={language.code} key={language.code} onChange={(e) => setVoiceIndex(e.target.value)}> {language.name}</Dropdown.Item>
                                            }
                                            )}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                    <FormControl as="textarea"
                                        placeholder='Please wait for Translation'
                                        value={outValue}
                                        disabled
                                        readonly
                                    >
                                    </FormControl>

                                    {/* Copy the Text */}


                                    <CopyToClipboard text={outValue}
                                        onCopy={() => setCopy(true)} style={{ cursor: "pointer", margin: "10px", size: "100px" }}>
                                        <button className="button-86" onClick={handleToAlert}>
                                            <AiOutlineCopy />
                                        </button>
                                    </CopyToClipboard>
                                    <ToastContainer />

                                </Col>

                                <div className="col-md-12 text-center">
                                    <button className="button-33" onClick={handleTranslation} >Translate</button>{' '}
                                </div>
                            </Row>
                        </Card.Body>

                    </Card>
                </Container>

            </div>

        </>

    )
}
