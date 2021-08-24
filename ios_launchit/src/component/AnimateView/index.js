import React, { Component } from "react";
import * as Animatable from "react-native-animatable";
import { Alert } from "react-native";

const defaultInOnNext = "fadeInLeft";
const defaultOutOnNext = "fadeOutRight";
const defaultInOnBack = "fadeInRight";
const defaultOutOnBack = "fadeOutLeft";

export class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentStep: 0,
      totalSteps: 0,
      userState: {},
      action: "fadeInLeft",
      animationFinished: false,
    };
  }

  componentWillMount() {
    const { comeInOnNext = defaultInOnNext } = this.props;
    this.setState({ action: comeInOnNext });
  }
  backhandlercheck(nextProps)
  {
    const { currentStep } = this.state;
   
    if (currentStep !== 0) {
      
        this.back();
        var data = this.backtitle(currentStep);        
        this.props.changehaeder(data);      
    }
    else
    this.props.Backend();
  }
  backtitle(val)
  {
    if(val == 1)
    {return {title:"Apply",cid:0}  }
    else if(val == 2)
    {return {title:"Select Permit Details",cid:0}  }
    else if(val == 3)
    {return {title:"Permit Search List" ,cid:0}  }
    else if(val == 4)
    {return {title:"Permit Summary",cid:0}  }
    else if(val == 5)
    {return {title:"Emergency Contact Information",cid:1  }}
    else if(val == 6)
    // {return {title:"Alarm Company & Site Information",cid:1  }}
    {return {title:"Emergency Contact Information",cid:1  }}
    else if(val == 7)
    {return {title:"Billing Information",cid:1  }}
    else if(val == 8)
    {return {title:"Appliction Information",cid:1  }}
    else if(val == 9)
    {return {title:"CAD Information",cid:1  }}
    else if(val == 10)
    {return {title:"Upload New Attachment",cid:2  }}
    else if(val == 11)
    {return {title:"Attachment List",cid:2  }}
    else if(val == 12)
    {return {title:"Terms & Conditions",cid:3  }}
    else if(val == 13)
    {return {title:"Invoice",cid:4 }}
    else if(val == 14)
    {return {title:"Summary",cid:5 }}
    
  }
  componentDidMount() {
    const { steps = 0 } = this.props;
    this.setState({ totalSteps: steps.length - 1 });
    this.props.onRef(this)
  }
  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  next = () => {
    const { currentStep, totalSteps } = this.state;
    const {
      animate = true,
      OutOnNext = defaultOutOnNext,
      duration = 200,
    } = this.props;
    if (currentStep !== totalSteps) {
      this.onNext();
      this.setState({ action: OutOnNext, animationFinished: false });
      if (animate) {
        setTimeout(() => {
          this.setState({ currentStep: currentStep + 1 });
        }, duration);
      }
    } else {
      this.finish();
    }
  };

  back = () => {
    const { currentStep } = this.state;
    const {
      animate = true,
      OutOnBack = defaultOutOnBack,
      duration = 200,
    } = this.props;
    if (currentStep !== 0) {
      this.onBack();
      this.setState({ action: OutOnBack, animationFinished: false });
      if (animate) {
        setTimeout(() => {
          this.setState({ currentStep: currentStep - 1 });
        }, duration);
      }
    }
  };

  onNext = () => {
    const { onNext } = this.props;
    if (onNext) {
      if (typeof onNext != "function") {
        throw new Error("onNext parameter should be a function");
      }
      onNext();
    }
  };

  onBack = () => {
    const { onBack } = this.props;
    if (onBack) {
      if (typeof onBack != "function") {
        throw new Error("onBack parameter should be a function");
      }
      onBack();
    }
  };

  finish = () => {
    const { onFinish } = this.props;
    const { userState } = this.state;
    if (onFinish) {
      onFinish(userState);
      this.props.changehaeder({title:"Apply",cid:0}); 
      this.setState({ currentStep: 0})
    }
  };
 
  saveState = (state) => {
    const { userState } = this.state;
    if (typeof state !== "object") {
      throw new Error("State must be an object");
    }
    this.setState({ userState: { ...userState, ...state } });
  };

  getState = () => {
    return this.state.userState;
  };

  getCurrentStep = () => {
    const { currentStep } = this.state;
    return currentStep + 1;
  };

  getTotalSteps = () => {
    const { totalSteps } = this.state;
    return totalSteps + 1;
  };

  animationEnd = () => {
    const { action, animationFinished } = this.state;
    const {
      OutOnBack = defaultOutOnBack,
      comeInOnBack = defaultInOnBack,
      comeInOnNext = defaultInOnNext,
    } = this.props;
    if (!animationFinished) {
      this.setState({
        action: action == OutOnBack ? comeInOnBack : comeInOnNext,
        animationFinished: true,
      });
    }
  };

  render() {
    const { steps = 0, duration = 1000 } = this.props;
    const { currentStep, action } = this.state;
    const Step = steps[currentStep].component;
    return (
      <Animatable.View
        ref={this.handleViewRef}
        animation={action}
        onAnimationEnd={this.animationEnd}
        style={{ flex: 1 }}
        duration={180}
      >
        <Step
          next={this.next}
          back={this.back}
          saveState={this.saveState}
          getState={this.getState}
          getCurrentStep={this.getCurrentStep}
          getTotalSteps={this.getTotalSteps}
          changehaeder={this.props.changehaeder}
        />
      </Animatable.View>
    );
  }
}

export default Animatable.createAnimatableComponent(index);
