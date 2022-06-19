import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";

import PhotoIcon from "@mui/icons-material/Photo";
import PersonIcon from "@mui/icons-material/Person";

export default function DesktopComponent() {
  return (
    <div>
      <Grid container align="center">
        <Grid item xs={12} md={12}>
          <h1>หมอหมึก</h1>
          <p className="text_break_word">
            ผู้มีประสบการณ์พยากรณ์กว่า 10 ปี พร้อมคำพยากรณ์ที่แม่นยำ
          </p>
          <Button variant="contained" color="neutral" size="large">
            จองคิว
          </Button>
        </Grid>
      </Grid>

      <Grid item align="center" marginTop={5} marginBottom={5} xs={12} md={12}>
        <Paper
          color="neutral"
          alt="Avatars 1"
          align="center"
          sx={{ width: 250, height: 277.84 }}
        >
          <PhotoIcon
            style={{
              margin: "auto",
              marginTop: "50px",
              width: "90%",
              height: "50%",
              padding: "10px",
            }}
          />
        </Paper>
      </Grid>
      <Grid container>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Grid item className="wrap_left" align="left" xs={12} md={12}>
            <h1>ประวัติหมอหมึก</h1>
            <p>
              หมอหมึกเป็นนักพยากรณ์ที่ชำนาญด้านการทำนายดวง
              <br />
              ด้วยลูกแก้วพยากรณ์ ไพ่ทาโร และการดูลายมือ
              <br />
              ด้วยความสามารถที่หลากหลาย ทำให้หมอหมึก
              <br />
              สามารถเลือกวิธีการทำนายที่เหมาะสมกับแต่ละบุคคล
              <br />
              เพื่อให้ได้ผลลัพธ์แม่นยำที่สุด
            </p>
          </Grid>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Grid item className="wrap_left_mobile" align="left" xs={12} md={12}>
            <h1 align="left">ประวัติหมอหมึก</h1>
            <p align="left">
              หมอหมึกเป็นนักพยากรณ์ที่ชำนาญด้านการทำนายดวง
              <br />
              ด้วยลูกแก้วพยากรณ์ ไพ่ทาโร และการดูลายมือ
              <br />
              ด้วยความสามารถที่หลากหลาย ทำให้หมอหมึก
              <br />
              สามารถเลือกวิธีการทำนายที่เหมาะสมกับแต่ละบุคคล
              <br />
              เพื่อให้ได้ผลลัพธ์แม่นยำที่สุด
            </p>
          </Grid>
        </Box>
        <Grid item align="center" xs={12} md={12}>
          <h1>รีวิวจากลูกค้า</h1>
        </Grid>
        <Grid item align="center" xs={12} md={12} marginBottom={5}>
          <Avatar alt="Avatars 1" sx={{ width: 180, height: 180 }}>
            <PersonIcon />
          </Avatar>
          <h3>แมทธิว นักธุรกิจ</h3>
          <p>
            หมอหมึกช่วยผมเรื่องฤกษ์ยามในการเจรจาธุรกิจ
            <br />
            ได้มากเลย ตอนนี้ขายดีเทน้ำเทท่าเลยครับ
          </p>
        </Grid>
        <Grid item align="center" xs={12} md={12} marginBottom={5}>
          <Avatar alt="Avatars 2" sx={{ width: 180, height: 180 }}>
            <PersonIcon />
          </Avatar>
          <h3>แจ็ค นักแสดง</h3>
          <p>
            ต้องขอบคุณหมอหมึกในการ
            <br />
            ช่วยให้ความสัมพันธ์
            <br />
            ราบรื่นด้วยนะคะ
            <br />
            ทำนายอะไรไว้ก็แม่นทุกอย่างเลยค่ะ
          </p>
        </Grid>
        <Grid item align="center" xs={12} md={12} marginBottom={5}>
          <Avatar alt="Avatars 3" sx={{ width: 180, height: 180 }}>
            <PersonIcon />
          </Avatar>
          <h3>น้ำใส นักศึกษา</h3>
          <p>
            ที่หมอหมึกบอกมานะคะ เกิดเกือบหมดเลยค่ะ
            <br />
            ถ้าไม่ได้หมอหมึกช่วยไว้ ชีวิตคงแย่เลยค่ะ
            <br />
            ดีนะที่ป้องกันเรื่องร้ายๆ ทันเวลา
          </p>
        </Grid>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Grid item align="left" xs={12} md={12} marginBottom={5}>
            <h2 className="wrap_left" align="left">
              ทำนายชะตากับหมอหมึก
            </h2>
            <p className="wrap_left" align="left">
              สามารถจองคิวได้ตาม
              <br />
              อีเมล: octopus_fortune@teller.com
              <br />
              โทรศัพท์: 099 XXXX XXX
              <br />
              และมาที่สำนักที่
              <br />
              ชั้น 12 อาคาร JWC ถนนโปรแกรมมิ่ง
              <br />
              แขวงเว็บ เขตอินเตอร์เน็ต กรุงเทพ 99999
              <br />
              ตามวันเวลาที่ได้นักไว้
              <br />
              <br />
              จำกัดที่ 10 คิวต่อหนึ่งวัน เปิดทำการ
              <br />
              10.00 - 18.30 น. พัก 12.00 - 13.00
              <br />
              เปิดทุกวันอังคารถึงเสาร์ หยุดวันจันทร์และอาทิตย์
            </p>
          </Grid>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Grid
            item
            className="wrap_left_mobile"
            align="left"
            xs={12}
            md={12}
            marginBottom={5}
          >
            <h2 align="left">ทำนายชะตากับหมอหมึก</h2>
            <p align="left">
              สามารถจองคิวได้ตาม
              <br />
              อีเมล: octopus_fortune@teller.com
              <br />
              โทรศัพท์: 099 XXXX XXX
              <br />
              และมาที่สำนักที่
              <br />
              ชั้น 12 อาคาร JWC ถนนโปรแกรมมิ่ง
              <br />
              แขวงเว็บ เขตอินเตอร์เน็ต กรุงเทพ 99999
              <br />
              ตามวันเวลาที่ได้นักไว้
              <br />
              <br />
              จำกัดที่ 10 คิวต่อหนึ่งวัน เปิดทำการ
              <br />
              10.00 - 18.30 น. พัก 12.00 - 13.00
              <br />
              เปิดทุกวันอังคารถึงเสาร์ หยุดวันจันทร์และอาทิตย์
            </p>
          </Grid>
        </Box>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <Grid
            item
            xs={12}
            md={12}
            marginBottom={5}
            className="wrap_left"
            align="left"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6661.069122782368!2d100.7740425967704!3d13.728985580661673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d664988a1bedf%3A0xcc678f180e221cd0!2z4Liq4LiW4Liy4Lia4Lix4LiZ4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lie4Lij4Liw4LiI4Lit4Lih4LmA4LiB4Lil4LmJ4Liy4LmA4LiI4LmJ4Liy4LiE4Li44LiT4LiX4Lir4Liy4Lij4Lil4Liy4LiU4LiB4Lij4Liw4Lia4Lix4LiH!5e0!3m2!1sth!2sth!4v1655561617257!5m2!1sth!2sth"
              width={310}
              height={310}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
        </Box>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <Grid
            item
            xs={12}
            md={12}
            marginBottom={5}
            className="wrap_left_mobile"
            align="left"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6661.069122782368!2d100.7740425967704!3d13.728985580661673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d664988a1bedf%3A0xcc678f180e221cd0!2z4Liq4LiW4Liy4Lia4Lix4LiZ4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14Lie4Lij4Liw4LiI4Lit4Lih4LmA4LiB4Lil4LmJ4Liy4LmA4LiI4LmJ4Liy4LiE4Li44LiT4LiX4Lir4Liy4Lij4Lil4Liy4LiU4LiB4Lij4Liw4Lia4Lix4LiH!5e0!3m2!1sth!2sth!4v1655561617257!5m2!1sth!2sth"
              width={310}
              height={310}
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
        </Box>
      </Grid>
    </div>
  );
}
