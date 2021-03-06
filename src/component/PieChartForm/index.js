import React,{Component} from "react";
import { css } from "aphrodite";
import { d, fled, w, fle, h, ff, fw, fs, m, bc, jc, ai, b, pad } from "../../styles/themes";
import Selector from "../Selector";
import {connect} from "react-redux"; 
import {changeChartStas} from "../../store/actions/chart";
import DatePicker from "../../component/DatePicker";
const typeAspect = ["Content Type", "Feature"]

class PieChartForm extends Component{
    constructor(props){
        super(props)
    }
    render() {
        const {changeChartStas} = this.props
        return (
            <div className={css(d.flex, fled.c, w.w_100,)}>
                <div className={css(d.flex, jc.sa, fled.c)}>
                    <div className={css(d.flex, jc.sa, m.mg_t_md)}>
                        <div className={css(d.flex, ff.IBM, fw.w700, fs.emd, ai.c, jc.fs, fle.flex_1)}>
                            Type of aspect:
                        </div>
                        <div className={css(d.flex, ai.c, fle.flex_1)}>
                            <Selector name={"Aspect"} items={typeAspect} 
                                onChangeStas={(aspect)=>{
                                    changeChartStas({
                                        aspect: aspect,
                                        startRend: false
                                    })
                                }}
                            />
                        </div>
                    </div>
                    <div className={css(d.flex, jc.sa, m.mg_t_md)}>
                        <div className={css(d.flex, ff.IBM, fw.w700, fs.emd, ai.c, jc.fs, fle.flex_1)}>
                            Start Date:
                        </div>
                        <div className={css(d.flex, ai.c, fle.flex_1)}>
                            <DatePicker
                                time={"2019-01-01T21:11:54"}
                                onChangeStas={(time)=>{
                                    changeChartStas({
                                        startTime: time,
                                    })
                                }}
                            />
                        </div>
                    </div>
                    <div className={css(d.flex, jc.sa, m.mg_t_md)}>
                        <div className={css(d.flex, ff.IBM, fw.w700, fs.emd, ai.c, jc.fs, fle.flex_1)}>
                            End Date:
                        </div>
                        <div className={css(d.flex, ai.c, fle.flex_1)}>
                            <DatePicker
                                time={"2019-12-01T21:11:54"}
                                onChangeStas={(time)=>{
                                    changeChartStas({
                                        endTime: time
                                    })
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeChartStas: (payload)=>{
            dispatch(changeChartStas(payload))
        }
    }
}
export default connect(null,mapDispatchToProps)(PieChartForm);
