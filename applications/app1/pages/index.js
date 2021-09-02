import { useRootExports } from 'umi';
import { Button } from 'antd-mobile';
const DEFAULT = {  k12 :  1} ;

export default function() {
  const rootExports = useRootExports();
  let x = 1 

  // 共享的数据 
  const gdata = rootExports && rootExports.getData() || DEFAULT;
 
  const style = { color: 'red'}
  console.log('rootExports', rootExports, gdata);
  return (
    <div>
      <h1 style={style}>{`global data from main app   & ${gdata.k12}`}</h1>
      <Button
        type="primary"
        onClick={() => {
          gdata.k12 += 1
          hou.innerText=gdata.k12
        }}
      >点我
      </Button>
      <h2 id='hou'></h2>
    </div>
  );
}