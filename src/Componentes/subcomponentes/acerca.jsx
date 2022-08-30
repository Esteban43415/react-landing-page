import React, { Component } from "react";

class Acerca extends Component {
    render() {
        return (
            <div className="flex flex-col rounded-t-2xl p-10">
                <div className="grid grid-cols-6 gap-5 p-5 px-24 text-center">
                    <div className="col-span-2">
                        <div className="flex flex-row">
                            <img className="rounded-2xl w-full h-full" src="https://ep1.pinkbike.org/p4pb20155588/p4pb20155588.jpg" alt="foto" />
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="flex flex-row">
                            <p className="text-lg text-justify font-bold">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ornare gravida. Duis porta urna et risus accumsan suscipit. Maecenas convallis mattis nibh ac pharetra. Morbi aliquam aliquet ligula, in iaculis odio interdum et. Phasellus in lectus at tellus congue laoreet. Donec hendrerit sodales purus, eu porttitor nibh blandit id. Suspendisse ac nisi vulputate, aliquam massa vel, suscipit nulla. Nulla pellentesque, lacus ut elementum dignissim, ligula odio viverra mi, vel mattis odio quam sed metus. Curabitur eu convallis nisi. Donec nibh urna, gravida at egestas quis, maximus eget elit.
                            </p>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="flex flex-row">

                            <p className="text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida ornare gravida. Duis porta urna et risus accumsan suscipit. Maecenas convallis mattis nibh ac pharetra. Morbi aliquam aliquet ligula, in iaculis odio interdum et. Phasellus in lectus at tellus congue laoreet. Donec hendrerit sodales purus, eu porttitor nibh blandit id. Suspendisse ac nisi vulputate, aliquam massa vel, suscipit nulla. Nulla pellentesque, lacus ut elementum dignissim, ligula odio viverra mi, vel mattis odio quam sed metus. Curabitur eu convallis nisi. Donec nibh urna, gravida at egestas quis, maximus eget elit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Acerca;