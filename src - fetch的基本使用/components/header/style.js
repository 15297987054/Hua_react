import styled,{keyframes} from 'styled-components'
import bg from '../../static/img/onePic.jpg'
{/**创建div标签并赋予样式 */}
export const HeaderWrapper = styled.div`
    width:100%;
    height:1rem;
    background:${props=>props.color};
    &>h1{
        color:white
    };
    .hello{
        color:black;
        font-size:.4rem;
    }
`
{/**实现样式继承 */}
export const HeaderContainer = styled(HeaderWrapper)`
    background-image:url(${bg});
    margin-top:2rem;
`
{/**自定义标签属性 */}
export const FormInput = styled.input.attrs({
    type:'text',
    placeholder:'请输入...',
    name:'username'
})`
    width:100%
`
{/**动画 */}
const move = keyframes`
    0%{
        transform:rotate(0deg)
    }   
    100%{
        transform:rotate(700deg)
    }   
`
export const BoxRotate  = styled.div`
    width:1rem;
    height:1rem;
    background:tomato;
    animation:${move} 3s 1s;
`

