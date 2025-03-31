import React, {
  useReducer,
  useEffect,
  useCallback,
  useRef,
  useMemo
} from "react";
import { reducer } from "../reducer";
import { WhatsappSVG, CloseSVG, CheckSVG, SendSVG } from "./Icons";
import css from "../styles.module.css";

import darkBG from "./assets/bg-chat-tile-light.png";
import lightBG from "./assets/bg-chat-tile-dark.png";
import dummyAvatar from "./assets/uifaces-avatar.jpg";

export interface FloatingWhatsAppProps {

  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;

  onSubmit?: (
    event: React.FormEvent<HTMLFormElement>,
    formValue: string
  ) => void;
 
  onClose?: () => void;

  onNotification?: () => void;
 
  onLoopDone?: () => void;

 
  phoneNumber: string;

  accountName: string;

  chatboxHeight?: number;

  chatboxStyle?: React.CSSProperties;

  chatboxClassName?: string;
  
  avatar?: string;
 
  statusMessage?: string;
 
  chatMessage?: string;
  
  placeholder?: string;

  

  notificationDelay?: number;

  notificationLoop?: number;

  notificationSound?: boolean;

  notificationSoundSrc?: string;

  notificationStyle?: React.CSSProperties;
  
  notificationClassName?: string;

  allowClickAway?: boolean;

  allowEsc?: boolean;
 
  darkMode?: boolean;

  style?: React.CSSProperties;
 
  className?: string;


  buttonStyle?: React.CSSProperties;
 
  buttonClassName?: string;
}

export function FloatingWhatsApp({
  onClick,
  onSubmit,
  onClose,
  onNotification,
  onLoopDone,

  phoneNumber = "558494797413",
  accountName = "Adriana Magalhães",
  avatar = dummyAvatar,
  statusMessage= "Em geral, respondemos dentro de 1 hora.",
  chatMessage = "Olá! Sou Adriana Magalhães! 🤝 \nComo posso ajudar?",
  placeholder = "Digitando..",

  allowClickAway = false,
  allowEsc = false,

  notification = true,
  notificationDelay = 60,
  notificationLoop = 0,
  notificationSound = false,
  notificationSoundSrc = "",
  notificationStyle,
  notificationClassName = "floating-whatsapp-notification",

  buttonStyle,
  buttonClassName = "floating-whatsapp-button",

  chatboxHeight = 320,
  chatboxStyle,
  chatboxClassName = "floating-whatsapp-chatbox",

  darkMode = false,
  style,
  className = "floating-whatsapp"
}: FloatingWhatsAppProps) {
  const [{ isOpen, isDelay, isNotification }, dispatch] = useReducer(reducer, {
    isOpen: false,
    isDelay: true,
    isNotification: false
  });

  const timeNow = useMemo(
    () =>
      new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    []
  );

  const inputRef = useRef<HTMLInputElement | null>(null);
  const soundRef = useRef<HTMLAudioElement | null>(null);
  const loops = useRef(0);
  const notificationInterval = useRef(0);

  const handleNotification = useCallback(() => {
    if (!notification) return;

    dispatch({ type: "notification" });
    if (onNotification) onNotification();
    if (notificationLoop > 0) {
      loops.current += 1;

      if (notificationSound) {
        if (soundRef.current) {
          soundRef.current.currentTime = 0;
          soundRef.current.play();
        }
      }
      if (loops.current === notificationLoop) {
        clearInterval(notificationInterval.current);
        if (onLoopDone) onLoopDone();
      }
    }
  }, [
    notification,
    notificationLoop,
    notificationSound,
    onNotification,
    onLoopDone
  ]);

  useEffect(() => {
    const delayInSecond = notificationDelay * 1000;
    if (delayInSecond < 10)
      return console.error(
        "notificationDelay prop value must be at least 10 seconds."
      );

    notificationInterval.current = window.setInterval(
      handleNotification,
      delayInSecond
    );

    return () => clearInterval(notificationInterval.current);
  }, [handleNotification, notificationDelay]);

  const handleOpen = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();

      if (isOpen) return;

      clearInterval(notificationInterval.current);
      dispatch({ type: "open" });
      setTimeout(() => dispatch({ type: "delay" }), 2000);
      if (onClick) onClick(event);
    },
    [isOpen, onClick]
  );

  const handleClose = useCallback(() => {
    dispatch({ type: "close" });

    if (onClose) onClose();
  }, [onClose]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputRef.current?.value) return;

    window.open(
      `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${inputRef.current.value}`
    );
    if (onSubmit) onSubmit(event, inputRef.current.value);
    inputRef.current.value = "";
  };

  useEffect(() => {
    const onClickOutside = () => {
      if (!allowClickAway || !isOpen) return;

      handleClose();
    };
    document.addEventListener("click", onClickOutside, false);

    return () => document.removeEventListener("click", onClickOutside);
  }, [allowClickAway, isOpen, handleClose]);

  useEffect(() => {
    const onEscKey = (event: KeyboardEvent) => {
      if (!allowEsc || !isOpen) return;

      if (event.key === "Escape") handleClose();
    };

    document.addEventListener("keydown", onEscKey, false);

    return () => document.removeEventListener("keydown", onEscKey);
  }, [allowEsc, isOpen, handleClose]);

  return (
    <div
      className={`${css.floatingWhatsapp} ${
        darkMode ? `${css.dark} ` : ""
      } ${className}`}
      style={style}
    >
      <div
        className={`${css.whatsappButton} ${buttonClassName}`}
        onClick={handleOpen}
        style={buttonStyle}
        aria-hidden="true"
      >
        <WhatsappSVG />
        {isNotification && (
          <span
            className={`${css.notificationIndicator} ${notificationClassName}`}
            style={notificationStyle}
          >
            1
          </span>
        )}
      </div>

      <div
        className={`${css.whatsappChatBox} ${
          isOpen ? css.open : css.close
        } ${chatboxClassName}`}
        onClick={(event) => event.stopPropagation()}
        aria-hidden="true"
        style={{ height: isOpen ? chatboxHeight : 0, ...chatboxStyle }}
      >
        <header className={css.chatHeader}>
          <div className={css.avatar}>
            <img src={avatar} width="60" height="60" alt="whatsapp-avatar" />
          </div>
          <div className={css.status}>
            <span className={css.statusTitle}>{accountName}</span>
            <span className={css.statusSubtitle}>{statusMessage}</span>
          </div>
          <div className={css.close} onClick={handleClose} aria-hidden="true">
            <CloseSVG />
          </div>
        </header>

        <div
          className={css.chatBody}
          style={{ backgroundImage: `url(${darkMode ? darkBG : lightBG})` }}
        >
          {isDelay ? (
            <div className={css.chatBubble}>
              <div className={css.typing}>
                <div className={css.dot} />
                <div className={css.dot} />
                <div className={css.dot} />
              </div>
            </div>
          ) : (
            <div className={css.message}>
              <span className={css.triangle} />
              <span className={css.accountName}>{accountName}</span>
              <p className={css.messageBody}>{chatMessage}</p>
              <span className={css.messageTime}>
                {timeNow}
                <span style={{ marginLeft: 5 }}>
                  <CheckSVG />
                </span>
              </span>
            </div>
          )}
        </div>

        <footer className={css.chatFooter}>
          <form onSubmit={handleSubmit}>
            <input
              className={css.input}
              placeholder={placeholder}
              ref={inputRef}
              dir="auto"
            />
            <button type="submit" className={css.buttonSend}>
              <SendSVG />
            </button>
          </form>
        </footer>
      </div>
      {notificationSound && (
        <audio ref={soundRef} hidden src={notificationSoundSrc} />
      )}
    </div>
  );
}
