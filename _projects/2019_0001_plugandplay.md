---
layout: single
title: "Plug & Play"
excerpt: "An interactive music player design that explores a more tactile relationship with music in today's digital world."
header:
  teaser: mp3player/teaser.png
sidebar:
  - title: "Team Members"
    text: "Sohini Guin, Usman Khaliq"
author_profile: true 
comments: true
read_time: true

---
## Background

For the Smart Products course in my Masters program at Stanford, my teammate and 
I were tasked with rethinking and prototyping the future of music players. 

## Plug & Play - A New Tactile Way of Engaging with Music  

We prototyped the following music player, which we named "Plug & Play".

<figure>
  <img src="/images/mp3player/image1.jpeg" alt="this is a placeholder image">
</figure>  

## Design Principles of Plug & Play 

The following were the design principles of our music player.

### Conceptual Model

* Plug & Play as the same suggests plays music when the user plugs one of the 
  slots provided. It is inspired by a Whack-a-mole!

* It can play six tracks for the six slots provided. The name, physical appearance 
  of the slots and the plug make the concept clear to the user.

### Affordances 

* The visible speaker on both sides of the product makes it look like an object 
  that has audio output.

* The Plug & Play mp3 player has slots and a plug which makes it look like that
  is the primary action necessary

### Signifiers 

* The volume control with the slider is a signifier that the volume can be changed.

* The slots and the plug signify the action that the plug needs to be placed in 
  the slot.

* The copper contact color inside the slot as well as on the base of the plug 
  also act as a similar signifier. 

### Constraints 

* The Plug & Play mp3 player can play 6 tracks. This constraint is obvious from 
  the six slots on the product.

## Video Demo of Plug & Play

<iframe src="https://www.youtube.com/embed/P3HCQbTM7uA" width="560" height="315" frameborder="0"> </iframe>  


## The State Diagram

The following was the state diagram for Plug & Play 

<figure>
  <img src="/images/mp3player/statediagram.png" alt="this is a placeholder image">
</figure>      

## Hardware Parts Used in Plug & Play

* Arduino UNO
* Grove Shield 
* [Grove - MP3 v2.0](http://wiki.seeedstudio.com/Grove-MP3_v2.0/){:target="_blank"}
* [Grove - Slide Potentiometer](http://wiki.seeedstudio.com/Grove-Slide_Potentiometer/){:target="_blank"}
* Buttons 

## Arduino Code for Plug & Play

```
#include <SoftwareSerial.h>
#include <EventManager.h>
#include <MP3Player_KT403A.h>
 
//---------------------------------
//      Defintions & Variables    
//---------------------------------
// Add any defintions (like pin numbers) here:
const int button1 = 4;
const int button2 = 5;
const int button3 = 6;
const int button4 = 7;
const int button5 = 8;
const int button6 = 9;
//static int prev_reading1 = LOW;
//variables for the potentiometer
int adcPin = A0; // select the input pin for the potentiometer
int ledPin = A1; // select the pin for the LED
int adcIn = 0;   // variable to store the value coming from the sensor
int output = 0; //variable that records the scaled output from the potentiometer
uint8_t volumeLevel; // volume level input in hexadecimal
 
// Note: You must define a SoftwareSerial class object that the name must be mp3,
//       but you can change the pin number according to the actual situation.
SoftwareSerial mp3(2, 3);
 
// the number of the pushbutton pin
 
// variables will change:
int buttonState = 0;         // variable for reading the pushbutton status
 
//---------------------------------
//     Event & State Variables    
//---------------------------------
// Renaming events to have more useful names
// (you can add more and rename as needed)
#define EVENT_PLUGIN_SONG1 EventManager::kEventMenu0
#define EVENT_PLUGOUT_SONG1 EventManager::kEventMenu1
#define EVENT_PLUGIN_SONG2 EventManager::kEventUser2
#define EVENT_PLUGOUT_SONG2 EventManager::kEventUser3
#define EVENT_PLUGIN_SONG3 EventManager::kEventUser4
#define EVENT_PLUGOUT_SONG3 EventManager::kEventUser5
#define EVENT_PLUGIN_SONG4 EventManager::kEventUser6
#define EVENT_PLUGOUT_SONG4 EventManager::kEventUser7
#define EVENT_PLUGIN_SONG5 EventManager::kEventUser8
#define EVENT_PLUGOUT_SONG5 EventManager::kEventUser9
#define EVENT_PLUGIN_SONG6 EventManager::kEventMenu2
#define EVENT_PLUGOUT_SONG6 EventManager::kEventMenu3
 
 
// Create the Event Manager
EventManager eventManager;
 
// Create the different states for the state machine
enum SystemState_t {INIT,MP3_OFF,PLAY_SONG1,PLAY_SONG2,PLAY_SONG3,PLAY_SONG4,PLAY_SONG5,PLAY_SONG6};
 
// Create and set a variable to store the current state
SystemState_t currentState = INIT;
 
 
void setup() {
  Serial.begin(9600); // init serial to 9600b/s
  pinMode(ledPin, OUTPUT); // set ledPin to OUTPUT
 
  eventManager.addListener(EVENT_PLUGIN_SONG1,music_player);
  eventManager.addListener(EVENT_PLUGOUT_SONG1,music_player); 
  eventManager.addListener(EVENT_PLUGIN_SONG2,music_player);
  eventManager.addListener(EVENT_PLUGOUT_SONG2,music_player);
  eventManager.addListener(EVENT_PLUGIN_SONG3,music_player);
  eventManager.addListener(EVENT_PLUGOUT_SONG3,music_player);
  eventManager.addListener(EVENT_PLUGIN_SONG4,music_player);
  eventManager.addListener(EVENT_PLUGOUT_SONG4,music_player);
  eventManager.addListener(EVENT_PLUGIN_SONG5,music_player);
  eventManager.addListener(EVENT_PLUGOUT_SONG5,music_player);
  eventManager.addListener(EVENT_PLUGIN_SONG6,music_player);
  eventManager.addListener(EVENT_PLUGOUT_SONG6,music_player);
 
  // Initialize state machine
  //    Rename with your state machine name!
  music_player(INIT,0);
}
 
void loop() {
    // Handle any events that are in the queue
    eventManager.processEvent();
 
    // Check for any new events
    OnPlugIn1();
    OnPlugOut1();
    OnPlugIn2();
    OnPlugOut2();
    OnPlugIn3();
    OnPlugOut3();
    OnPlugIn4();
    OnPlugOut4();
    OnPlugIn5();
    OnPlugOut5();
    OnPlugIn6();
    OnPlugOut6();
 
// read the value from the sensor:
    adcIn = analogRead(adcPin);
    output = map(adcIn,0,1023,0,60);
    if(output >= 7) digitalWrite(ledPin,HIGH);  // if adc in &gt; 500, led light
    else digitalWrite(ledPin, LOW);
    volumeLevel = (uint8_t) output;
    SetVolume(volumeLevel);
    //Serial.println(volumeLevel);
    delay(100);
}
 
//---------------------------------
//        Event Checkers 
//---------------------------------
/* These are functions that check if an event has happened,
 * and posts them (and any corresponding parameters) to the
 * event queue, to be handled by the state machine.
*    Change function names as desired. */
void OnPlugIn1() {
  //static int prev_reading = LOW;
  bool eventHappened = false;
  int eventParameter = 0;       // Change type as needed
 
  int currentReading = digitalRead(button1);
  static int prev_reading = currentReading;
  
  // Check if the button reading changed (and that we're not debouncing)
  //commented this right now
  if((currentReading != prev_reading)) {
    // If the reading is high, the button was pressed
    if (currentReading == HIGH ) {
      eventHappened = true; 
    } 
  }    
 
  // Post the event if it occured
  if (eventHappened == true) {
    eventManager.queueEvent(EVENT_PLUGIN_SONG1, eventParameter);
    Serial.println("BUTTON DOWN EVENT");
  } 
 
  // Update last button reading
  prev_reading = currentReading;
   
  //Serial.println(prev_reading);
}
//commented this function out right now
void OnPlugOut1() {
  bool eventHappened = false;
  int eventParameter = 0;       // Change type as needed
 
  int currentReading = digitalRead(button1);
  static int prev_reading = currentReading;
  
  // Check if the button reading changed (and that we're not debouncing)
  if ((currentReading != prev_reading)) {
    if(currentReading == LOW){
      eventHappened = true;
    }
   
  }
 
  // Post the event if it occured
  if (eventHappened == true) {
    eventManager.queueEvent(EVENT_PLUGOUT_SONG1, eventParameter);
    Serial.println("BUTTON UP EVENT");
  }
 
  prev_reading = currentReading;
}
 
void OnPlugIn2() {
  //static int prev_reading = LOW;
  bool eventHappened = false;
  int eventParameter = 0;       // Change type as needed
 
  int currentReading = digitalRead(button2);
  static int prev_reading = currentReading;
  
  // Check if the button reading changed (and that we're not debouncing)
  //commented this right now
  if((currentReading != prev_reading)) {
    // If the reading is high, the button was pressed
    if (currentReading == HIGH ) {
      eventHappened = true; 
    } 
    
    
  }   
 
  // Post the event if it occured
  if (eventHappened == true) {
    eventManager.queueEvent(EVENT_PLUGIN_SONG2, eventParameter);
    Serial.println("BUTTON DOWN EVENT");
  } 
  
  // Update last button reading
  prev_reading = currentReading;
   
  //Serial.println(prev_reading);
}
//commented this function out right now
void OnPlugOut2() {
  bool eventHappened = false;
  int eventParameter = 0;       // Change type as needed
 
  int currentReading = digitalRead(button2);
  static int prev_reading = currentReading;
  
  // Check if the button reading changed (and that we're not debouncing)
  if ((currentReading != prev_reading)) {
    if(currentReading == LOW){
      eventHappened = true;
    }
   
  }
 
  // Post the event if it occured
  if (eventHappened == true) {
    eventManager.queueEvent(EVENT_PLUGOUT_SONG2, eventParameter);
    Serial.println("BUTTON UP EVENT");
  }
 
  prev_reading = currentReading;
}
 
void OnPlugIn3() {
  //static int prev_reading = LOW;
  bool eventHappened = false;
  int eventParameter = 0;       // Change type as needed
 
  int currentReading = digitalRead(button3);
  static int prev_reading = currentReading;
  
  // Check if the button reading changed (and that we're not debouncing)
  //commented this right now
  if((currentReading != prev_reading)) {
    // If the reading is high, the button was pressed
    if (currentReading == HIGH ) {
      eventHappened = true; 
    } 
    
  }   
 
  // Post the event if it occured
  if (eventHappened == true) {
    eventManager.queueEvent(EVENT_PLUGIN_SONG3, eventParameter);
    Serial.println("BUTTON DOWN EVENT");
  } 
 
  
  // Update last button reading
  prev_reading = currentReading;
   
  //Serial.println(prev_reading);
}
//commented this function out right now
void OnPlugOut3() {
  bool eventHappened = false;
  int eventParameter = 0;       // Change type as needed
 
  int currentReading = digitalRead(button3);
  static int prev_reading = currentReading;
  
  // Check if the button reading changed (and that we're not debouncing)
  if ((currentReading != prev_reading)) {
    if(currentReading == LOW){
      eventHappened = true;
    }
   
  }
 
  // Post the event if it occured
  if (eventHappened == true) {
    eventManager.queueEvent(EVENT_PLUGOUT_SONG3, eventParameter);
    Serial.println("BUTTON UP EVENT");
  }
 
  prev_reading = currentReading;
} 
 
void OnPlugIn4() {
  //static int prev_reading = LOW;
  bool eventHappened = false;
  int eventParameter = 0;       // Change type as needed
 
  int currentReading = digitalRead(button4);
  static int prev_reading = currentReading;
  
  // Check if the button reading changed (and that we're not debouncing)
  //commented this right now
  if((currentReading != prev_reading)) {
    // If the reading is high, the button was pressed
    if (currentReading == HIGH ) {
      eventHappened = true; 
    }   
    
  } 
 
  // Post the event if it occured
  if (eventHappened == true) {
    eventManager.queueEvent(EVENT_PLUGIN_SONG4, eventParameter);
    Serial.println("BUTTON DOWN EVENT");
  } 
  
  // Update last button reading
  prev_reading = currentReading;
   
  //Serial.println(prev_reading);
}
//commented this function out right now
void OnPlugOut4() {
  bool eventHappened = false;
  int eventParameter = 0;       // Change type as needed
 
  int currentReading = digitalRead(button4);
  static int prev_reading = currentReading;
  
  // Check if the button reading changed (and that we're not debouncing)
  if ((currentReading != prev_reading)) {
    if(currentReading == LOW){
      eventHappened = true;
    }
   
  }
 
  // Post the event if it occured
  if (eventHappened == true) {
    eventManager.queueEvent(EVENT_PLUGOUT_SONG4, eventParameter);
    Serial.println("BUTTON UP EVENT");
  }
 
  prev_reading = currentReading;
} 
 
void OnPlugIn5() {
  //static int prev_reading = LOW;
  bool eventHappened = false;
  int eventParameter = 0;       // Change type as needed
 
  int currentReading = digitalRead(button5);
  static int prev_reading = currentReading;
  
  // Check if the button reading changed (and that we're not debouncing)
  //commented this right now
  if((currentReading != prev_reading)) {
    // If the reading is high, the button was pressed
    if (currentReading == HIGH ) {
      eventHappened = true; 
    }   
    
  } 
 
  // Post the event if it occured
  if (eventHappened == true) {
    eventManager.queueEvent(EVENT_PLUGIN_SONG1, eventParameter);
    Serial.println("BUTTON 5 DOWN EVENT");
  } 
  
  // Update last button reading
  prev_reading = currentReading;
   
  //Serial.println(prev_reading);
}
//commented this function out right now
void OnPlugOut5() {
  bool eventHappened = false;
  int eventParameter = 0;       // Change type as needed
 
  int currentReading = digitalRead(button5);
  static int prev_reading = currentReading;
  
  // Check if the button reading changed (and that we're not debouncing)
  if ((currentReading != prev_reading)) {
    if(currentReading == LOW){
      eventHappened = true;
    }
   
  }
 
  // Post the event if it occured
  if (eventHappened == true) {
    eventManager.queueEvent(EVENT_PLUGOUT_SONG1, eventParameter);
    Serial.println("BUTTON UP 5 EVENT");
  }
 
  prev_reading = currentReading;
}
    
void OnPlugIn6() {
  //static int prev_reading = LOW;
  bool eventHappened = false;
  int eventParameter = 0;       // Change type as needed
 
  int currentReading = digitalRead(button6);
  static int prev_reading = currentReading;
  
  // Check if the button reading changed (and that we're not debouncing)
  //commented this right now
  if((currentReading != prev_reading)) {
    // If the reading is high, the button was pressed
    if (currentReading == HIGH ) {
      eventHappened = true; 
    } 
    
  } 
    
 
  // Post the event if it occured
  if (eventHappened == true) {
    eventManager.queueEvent(EVENT_PLUGIN_SONG3, eventParameter);
    Serial.println("BUTTON 5 DOWN EVENT");
  } 
 
  // Update last button reading
  prev_reading = currentReading;
   
  //Serial.println(prev_reading);
}
//commented this function out right now
void OnPlugOut6() {
  bool eventHappened = false;
  int eventParameter = 0;       // Change type as needed
 
  int currentReading = digitalRead(button6);
  static int prev_reading = currentReading;
  
  // Check if the button reading changed (and that we're not debouncing)
  if ((currentReading != prev_reading)) {
    if(currentReading == LOW){
      eventHappened = true;
    }
   
  }
 
  // Post the event if it occured
  if (eventHappened == true) {
    eventManager.queueEvent(EVENT_PLUGOUT_SONG3, eventParameter);
    Serial.println("BUTTON UP 5 EVENT");
  }
 
  prev_reading = currentReading;
}
    
//commented this function out right now
 
//---------------------------------
//           State Machine 
//---------------------------------
/* Use this function to create your state machine, which responds
 * to events based on the current state. Remember to update
 * the name of your state machine and the names of any events
 * and states! */
void music_player( int event, int param )
{
  // Initialize next state
  SystemState_t nextState = currentState;
 
  // Handle events based on the current state
  switch (currentState) {
    case INIT:
      //Serial.println("STATE: Initialization");
     
      // Do intialization things here:
      // ...
      pinMode(button1,INPUT);
      pinMode(button2, INPUT);
      pinMode(button3, INPUT);
      pinMode(button4, INPUT);
      pinMode(button5, INPUT);
      pinMode(button6, INPUT);
      
      //Initialize mp3 player
      mp3.begin(9600);
 
      delay(100);
      SelectPlayerDevice(0x02);       // Select SD card as the player device.
      SetVolume(0x0E);                // Set the volume, the range is 0x00 to 0x1E.
 
      //Start with mp3 player off
      nextState = MP3_OFF;
      break;
 
    case MP3_OFF:
      Serial.println("STATE: MP3 off. waiting for inputs");
     
      if(event == EVENT_PLUGIN_SONG1){
        // Change state to PLAYSONG_1
        //add all events for detecting all plugins here and then
        //move to subsequent states
        Serial.println("    EVENT_PLUGIN_SONG1 Received");
        PlayMP3folder(1);
 
        nextState = PLAY_SONG1;
      } 
 
      if(event == EVENT_PLUGIN_SONG2){
        // Change state to PLAYSONG_2
        //add all events for detecting all plugins here and then
        //move to subsequent states
        Serial.println("    EVENT_PLUGIN_SONG2 Received");
        PlayMP3folder(2);
 
        nextState = PLAY_SONG2;
      } 
 
      if(event == EVENT_PLUGIN_SONG3){
        // Change state to PLAYSONG_3
        //add all events for detecting all plugins here and then
        //move to subsequent states
        Serial.println("    EVENT_PLUGIN_SONG3 Received");
        PlayMP3folder(3);
 
        nextState = PLAY_SONG3;
      } 
 
      if(event == EVENT_PLUGIN_SONG4){
        // Change state to PLAYSONG_4
        //add all events for detecting all plugins here and then
        //move to subsequent states
        Serial.println("    EVENT_PLUGIN_SONG4 Received");
        PlayMP3folder(4);
 
        nextState = PLAY_SONG4;
      }  
 
       if(event == EVENT_PLUGIN_SONG5){
        // Change state to PLAYSONG_4
        //add all events for detecting all plugins here and then
        //move to subsequent states
        Serial.println("    EVENT_PLUGIN_SONG5 Received");
        PlayMP3folder(5);
 
        nextState = PLAY_SONG5;
      }   
 
      if(event == EVENT_PLUGIN_SONG6){
        // Change state to PLAYSONG_4
        //add all events for detecting all plugins here and then
        //move to subsequent states
        Serial.println("    EVENT_PLUGIN_SONG6 Received");
        PlayMP3folder(6);
 
        nextState = PLAY_SONG6;
      }  
 
      break;
 
    case PLAY_SONG1:
     Serial.println("STATE: Play Song 1");
      
     if(event == EVENT_PLUGOUT_SONG1){
        //Serial.println("event recorded");
        Serial.println("    EVENT_PLUGIN_SONG1 Received");
        PlayPause();
        nextState = MP3_OFF;
      }
     break;
 
     case PLAY_SONG2:
     Serial.println("STATE: Play Song 2");
      
     if(event == EVENT_PLUGOUT_SONG2){
        //Serial.println("event recorded");
        Serial.println("    EVENT_PLUGIN_SONG2 Received");
        PlayPause();
        nextState = MP3_OFF;
      }
     break;
 
     case PLAY_SONG3:
     Serial.println("STATE: Play Song 3");
      
     if(event == EVENT_PLUGOUT_SONG3){
        //Serial.println("event recorded");
        Serial.println("    EVENT_PLUGIN_SONG3 Received");
        PlayPause();
        nextState = MP3_OFF;
      }
     break;
 
     case PLAY_SONG4:
     Serial.println("STATE: Play Song 4");
      
     if(event == EVENT_PLUGOUT_SONG4){
        //Serial.println("event recorded");
        Serial.println("    EVENT_PLUGIN_SONG4 Received");
        PlayPause();
        nextState = MP3_OFF;
      }
     break;
 
     case PLAY_SONG5:
     Serial.println("STATE: Play Song 5");
      
     if(event == EVENT_PLUGOUT_SONG5){
        //Serial.println("event recorded");
        Serial.println("    EVENT_PLUGIN_SONG5 Received");
        PlayPause();
        nextState = MP3_OFF;
      }
     break;
 
     case PLAY_SONG6:
     Serial.println("STATE: Play Song 6");
      
     if(event == EVENT_PLUGOUT_SONG6){
        //Serial.println("event recorded");
        Serial.println("    EVENT_PLUGIN_SONG5 Received");
        PlayPause();
        nextState = MP3_OFF;
      }
     break;

    // you can have any number of case statements
    default:
      Serial.println("STATE: Unknown State");
      break;
  }
 
  // Update the current state
  currentState = nextState;
}

```