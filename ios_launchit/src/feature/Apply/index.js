import React, { Component } from "react";
import {
    Text,
    View,
    SafeAreaView,StyleSheet
  
} from "react-native";
import ApplyStatus from '../../component/ApplyStatus'
import DropDown from '../../component/DropDown'
import FooterButton from '../../component/view/footerButton'
import HeaderLeft from '../../component/Header/MainHeaderLeft'
import styles from './steps/styles'

import AnimatedMultistep from "../../component/AnimateView";
import Step1 from "./steps/selectpage";
import Step2 from "./steps/selectpremit";
import Step3 from "./steps/PermitSearchList";
import Step4 from "./steps/PermitSummary";
import Step5 from "./steps/emergency";
import Step6 from "./steps/alarm";
import Step7 from "./steps/billing";
import Step8 from "./steps/applicant";
import Step9 from "./steps/cad";
import Step10 from "./steps/UploadNewAttachment";
import Step11 from "./steps/AttachmetList";
import Step12 from "./steps/TermsAndCondition";
import Step13 from "./steps/InvoiceApply";
import Step14 from "./steps/Summary";

 
const allSteps = [
  { name: "step 1", component: Step1 } ,
  { name: "step 2", component: Step2 } ,
  { name: "step 3", component: Step3 } ,
  { name: "step 4", component: Step4 } ,
  { name: "step 5", component: Step5 } ,
  { name: "step 6", component: Step6 } ,
  { name: "step 7", component: Step7} ,
  { name: "step 8", component: Step8} ,
  { name: "step 9", component: Step9} ,
  { name: "step 10", component: Step10},
  { name: "step 11", component: Step11} ,
  { name: "step 12", component: Step12} ,
  { name: "step 13", component: Step13} ,
  { name: "step 14", component: Step14} ,
  
];


export default class Apply  extends Component {
    constructor(props)
    {
        super(props);
        this.state={             
              currentid:0
        }
        props.navigation.setOptions({ headerStyle: styles.headerStyle,headerLeft: props => <HeaderLeft {...props} back={true} backhandler={()=>this.backhandler()}/> })
    }
    
    onNext = () => { };
     
    backhandler() {
       if(this.child)
        this.child.backhandlercheck();
    }
      /* define the method to be called when you go on back step */
     
      onBack = () => {
        console.log("Back");
      };

      Backend()
      {
        this.props.navigation.navigate("Services")
      }
      /* define the method to be called when the wizard is finished */
     
      finish = finalState => {
        console.log(finalState);
        this.props.navigation.navigate("Applysucces")
      };

      changeheadername(val)
      {
        this.props.navigation.setOptions({ title: val.title })
        if(val.cid != undefined)
        this.setState({currentid:val.cid})
      }

      render() {
        let{currentid,triggerback} =this.state;
        return (
          <SafeAreaView style={{backgroundColor:'white',flex:1 }}>
            <ApplyStatus CurrentStatusID={currentid}/>
            <AnimatedMultistep
              onRef={ref => (this.child = ref)}
              steps={allSteps}
              onFinish={this.finish}
              onBack={this.onBack}
              onNext={this.onNext}
              comeInOnNext="fadeInLeft"
              OutOnNext="fadeOutRight"
              comeInOnBack="fadeInLeft"
              OutOnBack="fadeOutRight"
              duration={1000}          
              Backend={()=>{this.Backend()}}
              changehaeder={(e)=>this.changeheadername(e)}
            />
          </SafeAreaView>
        )
    }

   

}
