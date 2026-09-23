"""Poster-style cover for the Cricket Bat Drill Trainer: one large graded hero
photo (left) with typographic title block, plus two clean, non-rotated
reference panels (right) for the sensor close-up and 3D enclosure model.
Canvas is exact 16:9 so nothing gets cropped in the site's image containers."""

from PIL import Image, ImageDraw, ImageFilter, ImageEnhance, ImageFont

BASE = r"C:/Users/ISIRIG~1/AppData/Local/Temp/claude/D--portfolio/bebb3d94-6f9f-4d9d-afd2-8e5b26c0cd6c/images"
OUT = r"D:/isiri-portfolio/public/projects/cricket-trainer-collage.png"
FONTS = r"C:/Windows/Fonts"

W, H = 1280, 720
ACCENT = (34, 211, 238)
INK = (238, 241, 247)
MUTED = (176, 183, 200)


def cover_crop(im, tw, th, focus_x=0.5, focus_y=0.5):
    iw, ih = im.size
    scale = max(tw / iw, th / ih)
    nw, nh = round(iw * scale), round(ih * scale)
    im = im.resize((nw, nh), Image.LANCZOS)
    left = round((nw - tw) * focus_x)
    top = round((nh - th) * focus_y)
    left = max(0, min(left, nw - tw))
    top = max(0, min(top, nh - th))
    return im.crop((left, top, left + tw, top + th))


def grade(im, contrast=1.15, color=0.78, brightness=0.88, teal=0.12):
    im = ImageEnhance.Contrast(im).enhance(contrast)
    im = ImageEnhance.Color(im).enhance(color)
    im = ImageEnhance.Brightness(im).enhance(brightness)
    tint = Image.new("RGB", im.size, (8, 22, 30))
    return Image.blend(im, tint, teal)


def add_gradient(im, bottom_alpha=248, mid_stop=0.18, top_alpha=15):
    w, h = im.size
    overlay = Image.new("L", (1, h), 0)
    for y in range(h):
        t = y / h
        if t < mid_stop:
            a = int(top_alpha * (t / mid_stop))
        else:
            tt = (t - mid_stop) / (1 - mid_stop)
            a = int(top_alpha + (bottom_alpha - top_alpha) * (tt ** 1.25))
        overlay.putpixel((0, y), max(0, min(255, a)))
    overlay = overlay.resize((w, h))
    dark = Image.new("RGBA", (w, h), (4, 6, 10, 255))
    dark.putalpha(overlay)
    return Image.alpha_composite(im.convert("RGBA"), dark)


def font(path, size):
    return ImageFont.truetype(f"{FONTS}/{path}", size)


def tracked_width(draw, text, f, tracking=0):
    return sum(draw.textbbox((0, 0), ch, font=f)[2] + tracking for ch in text)


def draw_tracked(draw, xy, text, f, fill, tracking=0):
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=f, fill=fill)
        x += draw.textbbox((0, 0), ch, font=f)[2] + tracking
    return x


def wrap(draw, text, f, max_w):
    words = text.split()
    lines, cur = [], ""
    for word in words:
        trial = f"{cur} {word}".strip()
        if draw.textbbox((0, 0), trial, font=f)[2] <= max_w:
            cur = trial
        else:
            if cur:
                lines.append(cur)
            cur = word
    if cur:
        lines.append(cur)
    return lines


def panel(im_path, size, focus_x=0.5, focus_y=0.5, bright=1.0):
    im = Image.open(im_path).convert("RGB")
    im = cover_crop(im, size[0], size[1], focus_x, focus_y)
    im = grade(im, contrast=1.08, color=0.85, brightness=bright, teal=0.08)
    return im


# --- build canvas -----------------------------------------------------
exhibit = Image.open(f"{BASE}/7.jpg").convert("RGB")

margin = 56
right_w = 420
gap = 18
left_w = W - margin - gap - right_w - 40

hero = cover_crop(exhibit, left_w, H, focus_x=0.35, focus_y=0.35)
hero = grade(hero, contrast=1.12, color=0.75, brightness=0.85, teal=0.14)
hero = add_gradient(hero, bottom_alpha=250, mid_stop=0.15, top_alpha=10)

canvas = Image.new("RGBA", (W, H), (6, 8, 15, 255))
canvas.alpha_composite(hero, (0, 0))
draw = ImageDraw.Draw(canvas)

f_eyebrow = font("consolab.ttf", 19)
f_title = font("arialbd.ttf", 56)
f_sub = font("arial.ttf", 22)
f_tag = font("consola.ttf", 19)
f_caption = font("consolab.ttf", 15)

# eyebrow badge
eyebrow = "FIRST-YEAR MICROCONTROLLER ICT PROJECT"
ew = tracked_width(draw, eyebrow, f_eyebrow, tracking=3)
bx, by = margin, 44
pad_x, pad_y = 15, 9
draw.rectangle((bx, by, bx + ew + pad_x * 2, by + 20 + pad_y * 2), outline=ACCENT + (220,), width=2)
draw_tracked(draw, (bx + pad_x, by + pad_y), eyebrow, f_eyebrow, ACCENT + (255,), tracking=3)

# bottom-anchored text block (title -> subtitle -> tags), sized to left column
text_max_w = left_w - margin
bottom_margin = 46
tag_h = 32
tag_y = H - bottom_margin - tag_h

sub_lines = wrap(draw, "Sensor-based coaching aid for beginner batting technique", f_sub, text_max_w)
sub_h_each = 30
gap_tag_sub = 20
sub_block_h = len(sub_lines) * sub_h_each
sub_y0 = tag_y - gap_tag_sub - sub_block_h

title_line_h = 64
gap_sub_title = 26
title2_y = sub_y0 - gap_sub_title - title_line_h
title1_y = title2_y - title_line_h - 2

draw.text((margin, title1_y), "BEGINNER CRICKET", font=f_title, fill=INK)
draw.text((margin, title2_y), "BAT DRILL TRAINER", font=f_title, fill=ACCENT)

for i, line in enumerate(sub_lines):
    draw.text((margin, sub_y0 + i * sub_h_each), line, font=f_sub, fill=MUTED)

tags = ["ESP32", "MPU6050", "FSR 402"]
tx = margin
for tag in tags:
    tw = tracked_width(draw, tag, f_tag, tracking=1)
    pad = 11
    box = (tx, tag_y, tx + tw + pad * 2, tag_y + tag_h)
    draw.rectangle(box, outline=(255, 255, 255, 70), width=1)
    draw_tracked(draw, (tx + pad, tag_y + 5), tag, f_tag, MUTED, tracking=1)
    tx = box[2] + 12

# divider between hero and reference panels
div_x = left_w + gap // 2
draw.line([(div_x, 40), (div_x, H - 40)], fill=ACCENT + (90,), width=1)

# right column: two clean reference panels, captioned. Budget the full
# vertical span (40..H-40) across panel+caption+gap so nothing clips.
panel_x = left_w + gap
panel_w = right_w
col_top, col_bottom = 40, H - 40
caption_h = 24
row_gap = 16
available = col_bottom - col_top
top_h = 292
bottom_h = available - top_h - caption_h * 2 - row_gap

glove_panel = panel(f"{BASE}/8.jpg", (panel_w, top_h), focus_x=0.5, focus_y=0.28, bright=1.0)
canvas.alpha_composite(glove_panel.convert("RGBA"), (panel_x, col_top))
draw.rectangle((panel_x, col_top, panel_x + panel_w, col_top + top_h), outline=(255, 255, 255, 60), width=1)
draw_tracked(draw, (panel_x, col_top + top_h + 8), "GRIP PRESSURE SENSOR", f_caption, MUTED, tracking=2)

model_y = col_top + top_h + caption_h + row_gap
model_panel = panel(f"{BASE}/9.jpg", (panel_w, bottom_h), focus_x=0.5, focus_y=0.4, bright=1.15)
canvas.alpha_composite(model_panel.convert("RGBA"), (panel_x, model_y))
draw.rectangle((panel_x, model_y, panel_x + panel_w, model_y + bottom_h), outline=(255, 255, 255, 60), width=1)
draw_tracked(draw, (panel_x, model_y + bottom_h + 8), "3D ENCLOSURE MODEL", f_caption, MUTED, tracking=2)

# thin corner accents
L, t = 40, 3
for x0, y0, dx, dy in [(20, 20, 1, 1), (W - 20, H - 20, -1, -1)]:
    draw.line([(x0, y0), (x0 + dx * L, y0)], fill=ACCENT + (230,), width=t)
    draw.line([(x0, y0), (x0, y0 + dy * L)], fill=ACCENT + (230,), width=t)

canvas.convert("RGB").save(OUT, quality=95)
print("saved", canvas.size)
