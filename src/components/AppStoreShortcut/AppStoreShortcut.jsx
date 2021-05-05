import React from "react";
import AppStoreLogo from "../../assets/AppStoreLogo.png";
import PlayStoreLogo from "../../assets/PlayStoreLogo.png";

function AppStoreShortcut() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        flex: 1,
        width: "100%",
      }}
    >
      <p
        style={{
          fontSize: 14,
          marginTop: 10,
          marginBottom: 20,
          alignSelf: "center",
        }}
      >
        Get the app.
      </p>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignSelf: "center",
          width: "100%",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <a
          style={{ marginRight: 10 }}
          href="https://itunes.apple.com/app/instagram/id389801252?pt=428156&amp;ct=igweb.loginPage.badge&amp;mt=8&amp;vt=lo"
          tabIndex={0}
        >
          <img
            src={AppStoreLogo}
            style={{ height: 40, width: 136 }}
            alt="Download on the App Store"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.instagram.android&amp;referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3D61E2FFA1-7ACA-4869-A774-6AFDB3671483%26utm_content%3Dlo%26utm_medium%3Dbadge"
          tabIndex="0"
        >
          <img
            src={PlayStoreLogo}
            style={{ height: 40, width: 136 }}
            alt="Get it on Google Play"
          />
        </a>
      </div>
    </div>
  );
}

export default AppStoreShortcut;
