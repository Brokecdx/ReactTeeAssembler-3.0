import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { Tee } from './Tee.ts';
import { isDigit } from './Color.ts';

const TeeWrapper = styled.div`
  /*
    TeeAssembler 3.0
  */

  /* Base styles */
  font-size: 1px;
  position: relative;
  width: 80px;
  height: 80px;

  /* Handle dynamic size from props */
  ${props => props.dynamicSize && `
    font-size: ${props.dynamicSize / 100}px;
    height: ${props.dynamicSize}px;
    width: ${props.dynamicSize}px;
  `}

  /* All other selectors are nested inside */
  .back_foot,
  .back_foot_shadow,
  .front_foot,
  .front_foot_shadow {
    width: 64em;
    height: 32em;
  }

  .back_foot_shadow {
    background-position: -192em -64em;
    top: 52em;
    left: 4em;
    transform: scale(1.2);
  }

  .back_foot {
    background-position: -192em -32em;
    top: 51em;
    left: 7em;
    transform: scale(1.4);
  }

  .body,
  .body_shadow {
    width: 96em;
    height: 96em;
    transform: scale(0.9);
    top: 0;
  }

  .body_shadow {
    background-position: -96em 0;
  }

  .body {
    background-position: 0 0;
  }

  .front_foot_shadow {
    background-position: -192em -64em;
    top: 52em;
    left: 28em;
    transform: scale(1.2);
  }

  .front_foot {
    background-position: -192em -32em;
    top: 51em;
    left: 26em;
    transform: scale(1.35);
  }

  .lEye,
  .rEye {
    display: inline-flex;
    width: 32em;
    height: 32em;
    background-position: -64em -96em; /* This will be overridden by setEmotion */
    filter: brightness(1);
  }

  .lEye {
    left: -22em;
    top: -21em;
    transform: scale(1.08);
  }

  .rEye {
    left: -9em;
    top: -21em;
    transform: scale(1.08) rotateY(-180deg);
  }

  .line {
    width: 9.5em;
    height: 1em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: 0.5em 0.5em;
    opacity: 0;
  }

  .marker {
    width: 1em;
    height: 1em;
    position: absolute;
    right: -1em;
    opacity: 0;
  }
`;

function TeeSkinRenderer({ 
  skinImage, 
  size, 
  lookMouse, 
  look, 
  emotion, // <-- NEW PROP
  bodyColor, 
  feetColor, 
  coloringMode = 'code' 
}) {

  const teeContainerRef = useRef(null);
  const teeInstanceRef = useRef(null);

  // --- Main Initialization Effect ---
  // Runs when the skin image or container element changes
  useEffect(() => {
    if (skinImage && teeContainerRef.current) {
      
      const config = {
        bodyColor: bodyColor ?? 'none', // Pass 'none' if null
        feetColor: feetColor ?? 'none', // Pass 'none' if null
        coloringMode,
        size
      };

      // Create the new Tee instance
      teeInstanceRef.current = new Tee(skinImage, teeContainerRef.current, config);

      // --- MOVED LOGIC ---
      // Set initial look and emotion state *after* instance is created
      if (teeInstanceRef.current) {
        // Set initial look
        if (lookMouse) {
          teeInstanceRef.current.lookAtCursor();
        } else if (look !== undefined && isDigit(look.toString())) {
          teeInstanceRef.current.lookAt(look);
        } else {
          teeInstanceRef.current.lookAt(0); // Default look
        }

        // Set initial emotion
        teeInstanceRef.current.setEmotion(emotion);
      }

      // Cleanup function
      return () => {
        teeInstanceRef.current?.dontLookAtCursor();
        teeInstanceRef.current?.unbindContainer();
        teeInstanceRef.current = null;
      };
    }
  }, [skinImage, size, bodyColor, feetColor, coloringMode]); // Re-run if these fundamental props change

  // --- NEW Effect for "look" prop changes ---
  // This runs *without* re-creating the whole skin
  useEffect(() => {
    if (!teeInstanceRef.current) return; // Do nothing if instance doesn't exist

    if (lookMouse) {
      teeInstanceRef.current.lookAtCursor();
    } else if (look !== undefined && isDigit(look.toString())) {
      teeInstanceRef.current.dontLookAtCursor(); 
      teeInstanceRef.current.lookAt(look);
    } else {
      teeInstanceRef.current.dontLookAtCursor();
      teeInstanceRef.current.lookAt(0);
    }
  }, [look, lookMouse]); // Only re-run when these props change

  // --- NEW Effect for "emotion" prop changes ---
  useEffect(() => {
    if (!teeInstanceRef.current) return;
    
    teeInstanceRef.current.setEmotion(emotion);
  }, [emotion]); // Only re-run when emotion changes

  return (
    <TeeWrapper
      ref={teeContainerRef}
      dynamicSize={size}
      className="tee"
    />
  );
}

export default TeeSkinRenderer;