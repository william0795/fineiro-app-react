import React from 'react'
import '../../scss/_dashboard.scss'
import '../../scss/_userInfo.scss'
import CardWithHeader from '../common/cardWithHeader'
import CustomButton from '../common/customButton'
import SegmentHeader from '../common/segmentHeader'

export default function UserInfo () {
  const textData = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin volutpat nunc, ut fermentum nibh venenatis nec. Suspendisse sed vehicula dui, nec ullamcorper turpis. Donec luctus diam nec mauris efficitur, id suscipit velit tristique. Integer venenatis tincidunt tellus, et iaculis libero accumsan a. Nunc sed dolor felis. Sed vehicula sed turpis at pulvinar. Maecenas interdum finibus est, varius volutpat dolor molestie posuere. Sed efficitur tincidunt odio eu commodo. Nam interdum tellus sit amet dui sodales mattis. Suspendisse potenti. Vivamus sit amet porttitor felis, sed tristique eros.\n' +
        'Fusce a ullamcorper enim. Morbi a sem urna. In hac habitasse platea dictumst. Suspendisse pulvinar nulla ut justo commodo tempus. Aenean feugiat, justo ut luctus fringilla, erat elit cursus odio, eget aliquet dui mauris non mi. Fusce eleifend turpis justo, et porta turpis tincidunt sodales. Aenean molestie erat sem, et dictum mi tincidunt at. Praesent scelerisque diam felis, et viverra sapien condimentum at. Ut pretium egestas nulla, non dictum dolor finibus vel. Duis sed dolor nibh.\n' +
        'Cras consectetur nisi et turpis iaculis pretium. Nulla sit amet viverra turpis. Morbi leo tellus, suscipit quis lobortis non.' +
        'Donec luctus diam nec mauris efficitur, id suscipit velit tristique. Integer venenatis tincidunt tellus, et iaculis libero accumsan a. Nunc sed dolor felis. Sed vehicula sed turpis at pulvinar. Maecenas interdum finibus est, varius volutpat dolor molestie posuere. Sed efficitur tincidunt odio eu commodo. Nam interdum tellus sit amet dui sodales mattis. Suspendisse potenti. Vivamus sit amet porttitor felis, sed tristique eros.\n' +
        'Aenean feugiat, justo ut luctus fringilla, erat elit cursus odio, eget aliquet dui mauris non mi. Fusce eleifend turpis justo, et porta turpis tincidunt sodales.' +
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin volutpat nunc, ut fermentum nibh venenatis nec. Suspendisse sed vehicula dui, nec ullamcorper turpis. Donec luctus diam nec mauris efficitur, id suscipit velit tristique. Integer venenatis tincidunt tellus, et iaculis libero accumsan a. Nunc sed dolor felis. Sed vehicula sed turpis at pulvinar. Maecenas interdum finibus est, varius volutpat dolor molestie posuere. Sed efficitur tincidunt odio eu commodo. Nam interdum tellus sit amet dui sodales mattis. Suspendisse potenti. Vivamus sit amet porttitor felis, sed tristique eros.\n' +
        'Fusce a ullamcorper enim. Morbi a sem urna. In hac habitasse platea dictumst. Suspendisse pulvinar nulla ut justo commodo tempus. Aenean feugiat, justo ut luctus fringilla, erat elit cursus odio, eget aliquet dui mauris non mi. Fusce eleifend turpis justo, et porta turpis tincidunt sodales. Aenean molestie erat sem, et dictum mi tincidunt at. Praesent scelerisque diam felis, et viverra sapien condimentum at. Ut pretium egestas nulla, non dictum dolor finibus vel. Duis sed dolor nibh.\n' +
        'Cras consectetur nisi et turpis iaculis pretium. Nulla sit amet viverra turpis. Morbi leo tellus, suscipit quis lobortis non.' +
        'Donec luctus diam nec mauris efficitur, id suscipit velit tristique. Integer venenatis tincidunt tellus, et iaculis libero accumsan a. Nunc sed dolor felis. Sed vehicula sed turpis at pulvinar. Maecenas interdum finibus est, varius volutpat dolor molestie posuere. Sed efficitur tincidunt odio eu commodo. Nam interdum tellus sit amet dui sodales mattis. Suspendisse potenti. Vivamus sit amet porttitor felis, sed tristique eros.\n' +
        'Aenean feugiat, justo ut luctus fringilla, erat elit cursus odio, eget aliquet dui mauris non mi. Fusce eleifend turpis justo, et porta turpis tincidunt sodales.'
  function LabelInfo (props) {
    const withPass = <div className='segment-inner-post'>
            <span className="text-span fa fa-eye-slash"></span>
        </div>

    let pass
    if (props) {
      pass = withPass
    }
    return (
            <div className='segment'>
                <div className="container-text">
                    <div className='frame'>
                        <span className="helper"></span>
                        <span className={'text-span'}></span>
                    </div>
                    <div className="segment-inner">
                        {textData}
                    </div>
                    {pass}
                </div>
            </div>
    )
  }

  function LegendText (props) {
    return (
            <div className='row'>
                <div className='col-lg-7'></div>
                <div className='col-lg-5'>
                    <div className='title-body-legend'>*Actualice a PRO para obtener acceso a todas las funciones.</div>
                </div>
            </div>
    )
  }

  return (
        <div className='container-fluid '>
            <div className='row'>
                <div className='col-lg-6'>
                    <SegmentHeader text="Perfil" />
                    <div className='row'>
                        <div className='col col-md-4'>
                            <img src="https://i.imgur.com/G1pXs7D.jpg" id="img-user-info" alt="ml" />
                        </div>
                        <div className='col col-md-8'>
                            <LabelInfo icon="fa-solid fa-circle-user" text={localStorage.getItem('name')} />
                            <LabelInfo icon="fa fa-envelope" text={localStorage.getItem('name')} />
                            <LabelInfo icon="fa fa-user" text="alkfjasdlfkbasflkba" password={true} />
                        </div>
                    </div>
                    <SegmentHeader text="Plan" />
                    <CardWithHeader text="Starter" >
                        <LegendText />
                    </CardWithHeader>

                    <CustomButton color="green" name="normal" size="xlarge" type="primary" shape='circle' />
                </div>

                <div className='col-lg-6 '>
                    <SegmentHeader text="Condiciones de contrato" />
                    <div id="content">
                        <div id="content-scroll-wrap">
                            <div id="content-scroll-user-info">
                                <div className='space-top'></div>
                                {textData}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
