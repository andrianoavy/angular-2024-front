let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/itu/mbds/angular/front
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +1 ~/itu/mbds/angular/front
badd +10 src/app/assignments-new/assignments-new.component.ts
badd +1 src/app/assignments-new/assignments-new.component.html
badd +21 src/app/assignments-new/assignments-list/assignments-list.component.ts
badd +11 src/app/assignments-new/assignments-list/assignments-list.component.html
badd +25 src/app/shared/assignments-new.service.ts
badd +17 src/app/app.routes.ts
badd +45 src/app/assignments-new/assignments-list-item/assignments-list-item.component.ts
badd +16 src/app/assignments-new/assignments-list-item/assignments-list-item.component.html
badd +36 data/db.json
badd +9 src/app/assignments-new/assignments-list-item/assignments-list-item.component.css
badd +14 src/app/assignments-new/assignments-new.model.ts
badd +4 src/app/shared/role.enum.ts
badd +13 src/app/assignments-new/assignments-list-item-student/assignments-list-item-student.component.ts
badd +19 src/app/assignments-new/assignments-list-item-student/assignments-list-item-student.component.html
badd +39 src/app/autorization.service.ts
badd +1 src/app/assignments-new/assignments-list-item-student/assignments-list-item-student.component.css
badd +52 src/app/assignments-new/dragdrop-rendus/dragdrop-rendus.component.ts
badd +12 src/app/assignments-new/dragdrop-rendus/dragdrop-rendus.component.html
badd +14 src/app/assignments-new/dragdrop-rendus/dragdrop-rendus.component.css
badd +49 src/app/shared/assignments.service.ts
badd +11 src/app/assignments-new/rendu-dialog/rendu-dialog.component.ts
badd +1 src/app/assignments-new/rendu-dialog/rendu-dialog.component.html
badd +1 src/app/assignments-new/rendu-dialog/rendu-dialog.component.css
badd +3 src/app/assignments-new/annuler-rendu-dialog/annuler-rendu-dialog.component.html
badd +1 src/app/assignments-new/annuler-rendu-dialog/annuler-rendu-dialog.component.css
badd +10 src/app/assignments-new/annuler-rendu-dialog/annuler-rendu-dialog.component.ts
badd +27 src/app/students/students.component.ts
badd +57 src/app/students/students.component.html
badd +38 src/app/assignments-new/add-assignment/add-assignment.component.html
badd +113 src/app/assignments-new/add-assignment/add-assignment.component.ts
badd +17 src/app/shared/students.service.ts
badd +3 src/app/students/students.component.css
badd +1 src/app/assignments-new/auteur.model.ts
badd +78 src/app/assignments/assignments.component.ts
badd +27 src/app/matieres/matieres.component.ts
badd +17 src/app/shared/matieres.service.ts
badd +1 src/app/assignments-new/matiere.model.ts
badd +55 src/app/matieres/matieres.component.html
badd +18 src/app/matieres/matieres.component.css
badd +12 src/app/assignments-new/add-assignment/add-assignment.component.css
badd +3 src/app/shared/validators/require-match.ts
badd +20 src/app/shared/crud-api.service.ts
badd +1474 node_modules/.pnpm/typescript@5.3.3/node_modules/typescript/lib/lib.es5.d.ts
badd +24 src/app/app.component.ts
badd +12 src/app/app.component.html
badd +10 node_modules/.pnpm/rxjs@7.8.1/node_modules/rxjs/src/internal/operators/catchError.ts
badd +17 src/app/assignments-new/delete-assignments/delete-assignments.component.ts
badd +5 src/app/assignments-new/delete-assignments/delete-assignments.component.html
badd +1 src/app/assignments-new/delete-assignments/delete-assignments.component.css
badd +69 src/app/assignments/assignments.component.html
argglobal
%argdel
$argadd ~/itu/mbds/angular/front
edit src/app/assignments-new/dragdrop-rendus/dragdrop-rendus.component.ts
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
wincmd =
argglobal
balt src/app/assignments/assignments.component.ts
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 42 - ((20 * winheight(0) + 20) / 41)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 42
normal! 035|
lcd ~/itu/mbds/angular/front
wincmd w
argglobal
if bufexists(fnamemodify("~/itu/mbds/angular/front/src/app/assignments-new/dragdrop-rendus/dragdrop-rendus.component.html", ":p")) | buffer ~/itu/mbds/angular/front/src/app/assignments-new/dragdrop-rendus/dragdrop-rendus.component.html | else | edit ~/itu/mbds/angular/front/src/app/assignments-new/dragdrop-rendus/dragdrop-rendus.component.html | endif
if &buftype ==# 'terminal'
  silent file ~/itu/mbds/angular/front/src/app/assignments-new/dragdrop-rendus/dragdrop-rendus.component.html
endif
balt ~/itu/mbds/angular/front/src/app/matieres/matieres.component.html
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 12 - ((11 * winheight(0) + 20) / 41)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 12
normal! 010|
lcd ~/itu/mbds/angular/front
wincmd w
wincmd =
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
