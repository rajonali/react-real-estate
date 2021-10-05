import React from 'react';
import { Img1, Img2, Info1, Info2, DualColOptionsWrapper, FirstCol, SecondCol } from './DualColOptions';
import fam from '../../images/family.jpg';
import whitefam from '../../images/whitefamily.jpg'



const DualColOptions = ({ heading, data }) => {
  return (
      <DualColOptionsWrapper>
<FirstCol>

<Info1>

        <Img1 src={fam} alt="fam" />
</Info1>
    <Info1>
        <h3>Need a home loan? Get pre-approved
</h3>
<p>Find a lender who can offer competitive mortgage rates and help you with pre-approval.

</p>

       <button>Get pre-approved now</button> 
    </Info1>
</FirstCol>
<SecondCol>
<Info2><h3>
    
Get Local Info

    
    </h3>

    <p>

    Does it have pet-friendly rentals? What are the crime rates? How are the schools? Get important local information on the area you're most interested in.



    </p>
    
    <input />
    </Info2>
    <Info1>

    <Img2 src={whitefam} alt="fam" />
    </Info1>

    </SecondCol>
      </DualColOptionsWrapper>
  );
};

export default DualColOptions;
