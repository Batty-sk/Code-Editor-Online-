import './Home.css'
import Editor, { DiffEditor, useMonaco, loader } from "@monaco-editor/react";
import { useRef, useState,useEffect } from 'react';
import axios from 'axios'
let html={
    language:'html',
    last_value:'none',
    default_value:`
    <!-- 
    * *** *   * *** *    **************   ******      ******   ******
    *     *   *     *    *            *   *     *    *     *   *    *
    *     *****     *    *****    *****   *       **       *   *    *
    *               *        *    *       *                *   *    *
    *     *****     *        *    *       *    * **** *    *   *    *
    *     *   *     *        *    *       *    *      *    *   *    **********
    *     *   *     *        *    *       *    *      *    *   *             *
    * *** *   * *** *        ******       ******      ******   ***************
    -->
    <html>\n\n \n <head> <title>Index</title> </head> \n \n<body> \n<h1 style='color:blue;'>Index</h1> \n </body> \n\n </html>`
}

let javascript={
    language:'javascript',
    last_value:'none',
    default_value:`
    /*  *******   *****   *           *   *****  ********   *********  ********  *********  *********  ***********
           *      *   *    *         *    *   *  *          *          *      *      *      *       *       * 
           *      * * *     *       *     * * *  *          *          ********      *      *********       *
       *   *      *   *      *     *      *   *  ********   *          * *           *      *               *
       *   *      *   *       *   *       *   *         *   *          *   *         *      *               *
       * * *      *   *        ***        *   *  ********   *********  *     *   *********  *               *   
       
                *****************************************************************************************
       ************************************************************************************************************
       */        

    function helloworld()
    {
        console.log("hello peter");
    }
        
      
    `
}

let c={
    language:'c',
    last_value:'none',
    default_value:`
    #include<stdio.h> 

    void helloworld()
    {
        printf("Hello Peter");
    }
    
    `
}

let python={
    language:'python',
    last_value:'none',
    default_value:"Welcome To The Python Promgramming!! \n print('ola')"
}

let c__={
    language:'cpp',
    last_value:'none',
    default_value:"#include<iostream> \n using namespace std; \n int main()  \n { \n // Now you can code in c++ \n cout<<'hello peter' \n } Welcome To Cpp "
}

let java={
    language:'java',
    last_value:'none',
    default_value:  
    `
    public static void main()
    {
        public void function()
        {
            System.println("Hello Peter");
        }
    }

    `,
}

let program={
    script:`
    // bruh 
    #include<stdio.h>
    int main() {
    int a;
    printf("Sheesh %d",532);
}

    `,
    language: "c",
    versionIndex: "0",
    clientId: "deb044576ffaa0c7114d7c6762a33a91",
    clientSecret:"7bfc4791e63b771f0ce40cf9ede9ebea668b708ee094e90db82da10f048ead4f",
    stdin:'',
    SetConfiguration(script,language,versionIndex,stdin='')
    {
        this.script=script;
        this.language=language;
        this.versionIndex=versionIndex;
        this.stdin=stdin;
    }
};
const API_URL = 'https://api.jdoodle.com/v1/execute';
 // Replace with your CORS proxy URL

function Home()
{
    const[current_code_value,update_code_value]=useState(javascript.default_value)
    const[current_langauage_value,update_current_language]=useState('javascript');
    const[current_theme,update_theme]=useState('vs-dark');


    // registering the language for direct access with key. 
    const languages={
        'html':html,
        'javascript':javascript,
        'c':c,
        'cpp':c__,
        'java':java,
    }
    const editorRef=useRef(null)// we will assign the refrence of editor instance from which we can get the current value of the editor
     
    const iframestyle = {
        width: '100%',
        resize: 'horizontal',
      };

    // capturing the current stage of a monaco editor instance at the time of on load.
    function getEditorinstance(editor,monaco)
    {
       editorRef.current=editor;
    }

    function HandleChangeRequest(lan)
    {
        const ToLang=languages[lan];//javascript
        const FromLang=languages[current_langauage_value];// html
        // handel and save the updated code of  a particular langauage. and seeing if the value actually updated or not.
        Handel_last_value(FromLang);                                      
        if (ToLang.last_value=='none'){// javascript.last_value==none false    
            update_code_value(ToLang.default_value);//default boilerplate of the html.
            console.log('last value of ToLang :',ToLang.last_value)// last value of html will be none.
        }
        else{
            update_code_value(ToLang.last_value);//the new value will be last value of the javascript.
        }


        update_current_language(ToLang.language);// html
        console.log('done :)');
        
    }
    function Handel_last_value(Lang)
    {
        let currValue=editorRef.current.getValue();//javascript code html code
        console.log('printing the curr value of editor ', currValue);
        if(Lang.default_value==currValue)//htmt.default_value == html code 
        {
            console.log( Lang.defaultLanguage );
            console.log('yeah its same as previous');
        }
        else{

            Lang.last_value=currValue;// javascript.last_value = console.log
            console.log('Updated the value !')

        }
    }
    function handelRun()
    {
        //     making the json data
        program.SetConfiguration(current_code_value,current_langauage_value)

        axios.post(API_URL,program).then((x)=>{
            console.log('output', x);
        }).catch((x)=>{console.log('error',x)});
      //  console.log(current_code_value,current_langauage_value);             

    }

    function ThemeChange(x)
    {
        console.log(x.currentTarget.id)
        update_theme(x.currentTarget.id);
        //To be continued
    }


    return(
        <div id="main" className='mt-5'>
        <div className="container-fluid">
            <div className="row justify-content-center">
                    <div className="col-8 text-start p-0" id="code-area">

                        <div className="row br m-0 p-0" id='section-c'>
                            <div className="col-auto p-0">
                                <div className='d-flex p-3'>
                                    
                                        <span className='align-self-center'>
                                        <i class='bx bx-code-block'></i>
                                        </span>
                                        <h3 className='align-self-center ps-3 pt-2'>Code</h3>


                                </div>
                            </div>

                            <div className="col-4 p-0">
                                        <ul id='Themes' className='d-flex h-100 '>

                                                <li id='vs' onClick={ThemeChange}></li>
                                                <li id='vs-dark' onClick={ThemeChange}></li>
                                                <li id='hc-black' onClick={ThemeChange}></li>
                                                
                                        </ul>
                            </div>
                            <div className="col-2 align-self-center text-center">                            
                                    <select name="languages" id="selectLanguage" onChange={
                                        (e)=>{
                                            HandleChangeRequest(e.currentTarget.value)
                                        }
                                    }>
                                        <option value="javascript">Javascript</option>
                                        <option value="html">Html/Css</option>
                                        <option value="c">C</option>
                                        <option value="cpp">C++</option>
                                        <option value="java">Java</option>
                                    </select>
                                        
                            </div>
                                          
                            <div className="col-auto align-self-center text-center">
                                           
                            {current_langauage_value!='html'? <button className="btn btn-success ps-2 pe-3 " onClick={()=>{
                                    console.log('sheesh')
                                }}>         
                                    <div className='d-flex align-items-center' onClick={handelRun}>
                                        <span className='me-2'><i class='bx bx-run'></i></span>
                                            Run
                                    </div>  
                                </button>: <div className='d-flex align-items-center' id='live-code'>
                                        <span className='me-2'><i class='bx bxs-circle'></i></span>
                                            Live
                                    </div> }
                                             
                            </div>

                        </div>

                        <div className="row h-100">
                            <div className="col-12 ">   

                            <Editor
                              height="91%"
                              language={current_langauage_value}
                              defaultLanguage='javascript'// value = 'current code value'
                              value={current_code_value}
                              onMount={getEditorinstance}
                              theme={current_theme}
                              onChange={()=>{
                              update_code_value(editorRef.current.getValue());
                              
                              }
                              
                            }
                              ></Editor>
                              
                            </div>
                        </div>
                    </div>

                    <div className="col-3 br p-0" id="output-area">

                           <div id="section-t" className='d-flex br p-3'>
                                <span>
                                    <i class='bx bx-terminal'></i>
                                </span>
                                <h3 className='align-self-center ps-2 pt-2'>Output</h3>
                        </div>
                        
                        <div id="output" className='h-100 w-100'>
                            {current_langauage_value=='html'?<iframe src="" frameborder="0" srcDoc={current_code_value} height={'100%'} width={'100%;'} style={iframestyle}></ iframe>:<div></div>}
                              
                        </div>

                    </div>
            </div>
        </div>
        </div>
    )    
    }

export default Home